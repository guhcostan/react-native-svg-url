import Foundation

@objc (RNSUSvgUrlManager)
class SvgUrlManager: RCTViewManager {

  override func view() -> UIView! {
    return SvgUrl()
  }
}
