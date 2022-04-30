/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

#ifndef mozilla_net_UrlClassifierFeatureFingerprintingAnnotation_h
#define mozilla_net_UrlClassifierFeatureFingerprintingAnnotation_h

#include "UrlClassifierFeatureBase.h"

class nsIChannel;

namespace mozilla {
namespace net {

class UrlClassifierFeatureFingerprintingAnnotation final
    : public UrlClassifierFeatureBase {
 public:
  static const char* Name();

  static void MaybeShutdown();

  static already_AddRefed<UrlClassifierFeatureFingerprintingAnnotation>
  MaybeCreate(nsIChannel* aChannel);

  static already_AddRefed<nsIUrlClassifierFeature> GetIfNameMatches(
      const nsACString& aName);

  NS_IMETHOD ProcessChannel(nsIChannel* aChannel,
                            const nsTArray<nsCString>& aList,
                            const nsTArray<nsCString>& aHashes,
                            bool* aShouldContinue) override;

  NS_IMETHOD GetURIByListType(nsIChannel* aChannel,
                              nsIUrlClassifierFeature::listType aListType,
                              nsIURI** aURI) override;

 private:
  UrlClassifierFeatureFingerprintingAnnotation();

  static void MaybeInitialize();
};

}  // namespace net
}  // namespace mozilla

#endif  // mozilla_net_UrlClassifierFeatureFingerprintingAnnotation_h