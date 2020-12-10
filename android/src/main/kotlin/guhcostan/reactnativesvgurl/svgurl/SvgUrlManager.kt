package guhcostan.reactnativesvgurl.svgurl

import android.graphics.Color
import com.facebook.react.common.MapBuilder
import com.facebook.react.module.annotations.ReactModule
import com.facebook.react.uimanager.SimpleViewManager
import com.facebook.react.uimanager.ThemedReactContext
import com.facebook.react.uimanager.annotations.ReactProp

@ReactModule(name = SvgUrlManager.reactClass)
class SvgUrlManager : SimpleViewManager<SvgUrl>() {

  companion object {
    const val reactClass = "RNSUSvgUrl"
  }

  override fun getName(): String {
    return reactClass
  }

  override fun createViewInstance(reactContext: ThemedReactContext): SvgUrl {
    return SvgUrl(reactContext)
  }

  @ReactProp(name = "color", customType = "Color", defaultInt = Color.TRANSPARENT)
  fun setColor(view: SvgUrl, color: Int) {
    view.setColor(color)
  }

  @ReactProp(name = "count")
  fun setCount(view: SvgUrl, count: Int) {
    view.count = count
  }

  override fun getExportedCustomDirectEventTypeConstants(): Map<String, Any> {
    return MapBuilder.of(
      "onCountChange",
      MapBuilder.of("registrationName", "onCountChange")
    )
  }
}
