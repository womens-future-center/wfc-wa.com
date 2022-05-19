export const GA_ID = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID ?? ''

export const existsGaId = GA_ID !== ''

export const pageview = (path: any) => {
  window.gtag('config', GA_ID, {
    page_path: path,
  })
}

export const event = ({ action, category, label, value = '' }: any) => {
  if (!existsGaId) {
    return
  }

  window.gtag('event', action, {
    event_category: category,
    event_label: JSON.stringify(label),
    value,
  })
}