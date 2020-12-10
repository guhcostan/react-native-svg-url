import React, { useEffect, useState } from 'react'
import { NativeProps } from './native-component'
import { SvgXml } from 'react-native-svg'
import { View } from 'react-native'

type Props = Omit<NativeProps, 'uriContent' | 'setUriContent'>

const Component = (props: Props) => {
  const [isLoadingImage, setIsLoadingImage] = useState(true)
  const [uriContent, setUriContent] = useState<string>('')
  useEffect(() => {
    fetch(props.uri)
      .then((response) => response.text())
      .then((text) => {
        setUriContent(text)
        setIsLoadingImage(false)
      })
  }, [])
  return <SvgXml xml={uriContent} {...props} />
}

export { Component }
Component.displayName = 'SvgUrl'
