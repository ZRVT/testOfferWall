export const initGoogleAuth = ({ onSuccess, onError }) => {
  if (!window.google) {
    onError?.('Google SDK not loaded')
    return
  }

  const clientId = import.meta.env.VITE_GOOGLE_CLIENT_ID

  window.google.accounts.id.initialize({
    client_id: clientId,
    callback: (response) => {
      // response.credential = Google ID token (JWT)
      onSuccess?.(response.credential)
    },
  })
}

export const renderGoogleButton = (element, options = {}) => {
  if (!window.google || !element) return

  window.google.accounts.id.renderButton(element, {
    theme: 'outline',
    size: 'large',
    text: 'continue_with',
    shape: 'rectangular',
    ...options,
  })
}
