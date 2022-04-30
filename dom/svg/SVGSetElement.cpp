/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

#include "mozilla/dom/SVGSetElement.h"
#include "mozilla/dom/SVGSetElementBinding.h"

NS_IMPL_NS_NEW_SVG_ELEMENT(Set)

namespace mozilla {
namespace dom {

JSObject* SVGSetElement::WrapNode(JSContext* aCx,
                                  JS::Handle<JSObject*> aGivenProto) {
  return SVGSetElement_Binding::Wrap(aCx, this, aGivenProto);
}

//----------------------------------------------------------------------
// Implementation

SVGSetElement::SVGSetElement(
    already_AddRefed<mozilla::dom::NodeInfo>&& aNodeInfo)
    : SVGAnimationElement(std::move(aNodeInfo)) {}

//----------------------------------------------------------------------
// nsINode methods

NS_IMPL_ELEMENT_CLONE_WITH_INIT(SVGSetElement)

//----------------------------------------------------------------------

SMILAnimationFunction& SVGSetElement::AnimationFunction() {
  return mAnimationFunction;
}

}  // namespace dom
}  // namespace mozilla