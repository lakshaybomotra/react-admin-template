import { message, notification } from 'antd'

export const toast = {
  success: (text, description = null) => {
    if (description) {
      notification.success({
        message: text,
        description,
      })
    } else {
      message.success(text)
    }
  },

  error: (text, description = null) => {
    if (description) {
      notification.error({
        message: text,
        description,
      })
    } else {
      message.error(text)
    }
  },

  info: (text, description = null) => {
    if (description) {
      notification.info({
        message: text,
        description,
      })
    } else {
      message.info(text)
    }
  },

  warning: (text, description = null) => {
    if (description) {
      notification.warning({
        message: text,
        description,
      })
    } else {
      message.warning(text)
    }
  },
}
