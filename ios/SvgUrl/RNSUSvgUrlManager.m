#import <React/RCTViewManager.h>

@interface RCT_EXTERN_MODULE(RNSUSvgUrlManager, RCTViewManager)

+ (BOOL)requiresMainQueueSetup
{
  return YES;
}

// - (dispatch_queue_t)methodQueue
// {
//   return dispatch_get_main_queue();
// }

RCT_EXPORT_VIEW_PROPERTY(color, UIColor)
RCT_EXPORT_VIEW_PROPERTY(count, NSInteger)
RCT_EXPORT_VIEW_PROPERTY(onCountChange, RCTDirectEventBlock)

@end
