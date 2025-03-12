import React from 'react'
import { Table } from 'antd'

const AppTable = ({ columns, dataSource, loading = false, rowKey = 'id', ...rest }) => {
  return (
    <Table
      columns={columns}
      dataSource={dataSource}
      loading={loading}
      rowKey={rowKey}
      pagination={{ pageSize: 10 }}
      bordered
      {...rest}
    />
  )
}

export default AppTable
