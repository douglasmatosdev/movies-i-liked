import React, { DOMElement } from 'react'
import styled, { css } from 'styled-components'
import './skeleton.scss'

interface Props {
    children?: React.ReactChildren
}
export const AppGrid = ({ children }: Props) => {
  return (
      <MillAppGrid className="MIL_App" >
            <MillAppGridItem className="MIL_App-grid_skeleton">
              {children}
            </MillAppGridItem>
      </MillAppGrid>
  )
}

const MillAppGrid = styled.div``
const MillAppGridItem = styled.div``