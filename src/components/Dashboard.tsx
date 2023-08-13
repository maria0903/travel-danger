import React from "react"
import { Select, Space } from "antd"

export default function Dashboard(){
  return (
    <body>
      <header>
        <h1 className="title">Map</h1>
        <div className="language-wrap">
        <Select className="language"
        defaultValue="Korean"
        options={[
          { value:'Japanese', label:'Japanese'},
          { value:'Korean', label:'Korean'},
        ]}
        />
        </div>
      </header>
      <footer>
        <p><small>copyright 2023.maria.wonseok.All rights reserved</small></p>
      </footer>
    </body>
  )
}