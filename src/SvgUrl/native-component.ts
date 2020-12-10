import React from 'react'
import { requireNativeComponent, ViewProps, NativeSyntheticEvent } from 'react-native'

export type NativeProps = ViewProps & {
  readonly uri: string
}

export const NativeComponent: React.ComponentClass<NativeProps> = requireNativeComponent(
  'RNSUSvgUrl'
)
