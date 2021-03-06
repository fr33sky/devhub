export interface Analytics {
  setUser(userId: string): void
  setDimensions(
    dimensions: Partial<Omit<DevHubAnalyticsCustomDimensions, 'user_id'>>,
  ): void
  trackEvent(
    category: string,
    action: string,
    label?: string,
    value?: number,
  ): void
  trackModalView(modalName: string): void
  trackScreenView(screenName: string): void
}

export const analytics: Analytics

export interface DevHubAnalyticsCustomDimensions {
  dark_theme_id?: string
  is_beta: boolean
  is_dev: boolean
  is_electron: boolean
  light_theme_id?: string
  plan_amount?: number
  theme_id?: string
  user_id?: string
}
