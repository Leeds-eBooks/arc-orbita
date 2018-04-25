// @flow

import React, {Fragment} from 'react'
import styled from 'styled-components'
import {maybe} from 'maybes'
import {Link, RouteData} from 'react-static'
import Category from '../components/content/category'
import DisplaceAbsolute from '../components/util/displace-absolute'
import Page from '../components/layout/page'
import Global from '../components/meta/global'
import {primaryColor} from '../constants/style/colors'
import {getImagePath} from '../util/path'

// if (process.env.NODE_ENV !== 'production') {
//   const {whyDidYouUpdate} = require('why-did-you-update')
//   whyDidYouUpdate(React, {exclude: []})
// }

const FeatureImg = styled.img`
  max-width: 100%;
`

const FeatureText = styled.p`
  color: ${primaryColor};
`

export const Intro = DisplaceAbsolute(
  'fixed',
  ({style}) => (
    <div style={style}>
      <Link to="/">
        <FeatureImg src={getImagePath('orbita-trans.png')} />
      </Link>
      <FeatureText>Orbita: The Project • Arc Publications 2018</FeatureText>
    </div>
  ),
  {padding: '1rem'}
)

const ContentWrapper = ({categories, sampleItems}) => (
  <Fragment>
    {categories.map((category, i, {length}) =>
      maybe(sampleItems[i])
        .map(firstItem => (
          <Category
            key={category}
            src={getImagePath(
              firstItem.type === 'video' ? firstItem.thumb : firstItem.src
            )}
            name={category}
            isLastItem={i === length - 1}
          />
        ))
        .orJust(null)
    )}
  </Fragment>
)

const IndexPage = () => (
  <Page pad>
    <Global />
    <Intro />
    <RouteData>
      {({categories, sampleItems}) => (
        <ContentWrapper categories={categories} sampleItems={sampleItems} />
      )}
    </RouteData>
  </Page>
)

export default IndexPage
