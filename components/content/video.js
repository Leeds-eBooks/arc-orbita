// @flow

import React, {PureComponent} from 'react'
import {Subscribe} from 'unstated'
import styled from 'styled-components'
import ScrollContainer from '../higher-order/scroll'
import {ImageElement} from './image'

const VideoContainer = styled.div`
  /* background-color: black; */
  position: relative;
  overflow: hidden;
  width: 560px;
  height: 315px;
  z-index: 1;
  margin-bottom: ${({isLastItem}: {isLastItem: boolean}) =>
    isLastItem ? '0' : '10em'};
`

const Iframe = styled.iframe`
  position: relative;
  margin-bottom: 0;
  z-index: -1;
`

type Props = {
  src: string,
  thumb: string,
  isLastItem: boolean,
  mainColor: string,
}

type State = {expanded: boolean}

export default class Video extends PureComponent<Props, State> {
  state = {expanded: false}

  expand = () => this.setState({expanded: true})

  render() {
    return (
      <Subscribe to={[ScrollContainer]}>
        {({state: {scrollY}}) => (
          <div>
            {this.state.expanded ? (
              <VideoContainer style={{backgroundColor: this.props.mainColor}}>
                <Iframe
                  width="560"
                  height="315"
                  src={this.props.src}
                  frameBorder="0"
                  allowFullScreen
                />
              </VideoContainer>
            ) : (
              <VideoContainer onClick={this.expand} onMouseOver={this.expand}>
                <ImageElement src={this.props.thumb} />
              </VideoContainer>
            )}
          </div>
        )}
      </Subscribe>
    )
  }
}
