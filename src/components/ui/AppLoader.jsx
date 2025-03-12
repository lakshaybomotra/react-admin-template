import React from 'react'
import { Skeleton } from 'antd'

const AppLoader = ({ loading = true, children, ...rest }) => {
  return loading ? <Skeleton active {...rest} /> : children
}

export default AppLoader
