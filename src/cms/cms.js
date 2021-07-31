import CMS from "netlify-cms-app";
import React, { useState, useEffect } from 'react';
import { StyleSheetManager } from 'styled-components';
import { GlobalStyle } from '../styles/global-styles';

import BlogPreview from "./preview-templates/BlogPreview";
import AboutPreview from "./preview-templates/AboutPreview";
import homeBannerPreview from "./preview-templates/homeBannerPreview";
import homeBlogsPreview from "./preview-templates/homeBlogsPreview";
import homeClintsPreview from "./preview-templates/homeClintsPreview";
import homeFooterPreview from "./preview-templates/homeFooterPreview";
import homeOnlinePreview from "./preview-templates/homeOnlinePreview";
import homeStandoutPreview from "./preview-templates/homeStandoutPreview";
import homeWedoPreview from "./preview-templates/homeWedoPreview";
import fCasestudyPreview from "./preview-templates/fCasestudyPreview";
import FBannerPreview from "./preview-templates/FBannerPreview";
import fFacilityPreview from "./preview-templates/fFacilityPreview";
import fServicePreview from "./preview-templates/fServicePreview";
import ManuCapablePreview from "./preview-templates/ManuCapablePreview";
import ManuFFacilityPreview from "./preview-templates/ManuFFacilityPreview";
import ManuIndustryPreview from "./preview-templates/ManuIndustryPreview";
import ManuBannerPreview from "./preview-templates/ManuBannerPreview";
import ManuQualityPreview from "./preview-templates/ManuQualityPreview";
import ManuQAssurancePreview from "./preview-templates/ManuQAssurancePreview";
import ProBannerPreview from "./preview-templates/ProBannerPreview";
import ProArchiBrandedPreview from "./preview-templates/ProArchiBrandedPreview";
import ProFoodSupplyPreview from "./preview-templates/ProFoodSupplyPreview";
import ProPharmaceuticalPreview from "./preview-templates/ProPharmaceuticalPreview";
import ProDsolutionsPreview from "./preview-templates/ProDsolutionsPreview";
import ProDevPreview from "./preview-templates/ProDevPreview";
import homeTeamPreview from "./preview-templates/homeTeamPreview";
import homeTeam2Preview from "./preview-templates/homeTeam2Preview";

function StyleInjector({ children }) {
  const [iframeRef, setIframeRef] = useState(null);

  useEffect(() => {
    const iframe = document.getElementsByTagName('iframe')[0];
    const iframeHeadElem = iframe.contentDocument.head;
    setIframeRef(iframeHeadElem);
  }, []);

  return (
    iframeRef && (
      <StyleSheetManager target={iframeRef}>
        <>
          {children}<GlobalStyle />
        </>
      </StyleSheetManager>
    )
  );
}

export default function withStyledComponentsRendered(Comp) {
  return props => (
    <StyleInjector>
      <Comp {...props} />
    </StyleInjector>
  );
}

CMS.registerPreviewTemplate("blog", withStyledComponentsRendered(BlogPreview));
CMS.registerPreviewTemplate("about", withStyledComponentsRendered(AboutPreview));
CMS.registerPreviewTemplate("banner", withStyledComponentsRendered(homeBannerPreview));
CMS.registerPreviewTemplate("blogs", withStyledComponentsRendered(homeBlogsPreview));
CMS.registerPreviewTemplate("clints", withStyledComponentsRendered(homeClintsPreview));
CMS.registerPreviewTemplate("footer", withStyledComponentsRendered(homeFooterPreview));
CMS.registerPreviewTemplate("online", withStyledComponentsRendered(homeOnlinePreview));
CMS.registerPreviewTemplate("standout", withStyledComponentsRendered(homeStandoutPreview));
CMS.registerPreviewTemplate("wedo", withStyledComponentsRendered(homeWedoPreview));
CMS.registerPreviewTemplate("casestudy", withStyledComponentsRendered(fCasestudyPreview));
CMS.registerPreviewTemplate("fbanner", withStyledComponentsRendered(FBannerPreview));
CMS.registerPreviewTemplate("ffacility", withStyledComponentsRendered(fFacilityPreview));
CMS.registerPreviewTemplate("fservice", withStyledComponentsRendered(fServicePreview));
CMS.registerPreviewTemplate("capable", withStyledComponentsRendered(ManuCapablePreview));
CMS.registerPreviewTemplate("facility", withStyledComponentsRendered(ManuFFacilityPreview));
CMS.registerPreviewTemplate("industry", withStyledComponentsRendered(ManuIndustryPreview));
CMS.registerPreviewTemplate("mbanner", withStyledComponentsRendered(ManuBannerPreview));
CMS.registerPreviewTemplate("quality", withStyledComponentsRendered(ManuQualityPreview));
CMS.registerPreviewTemplate("qualityassurance", withStyledComponentsRendered(ManuQAssurancePreview));
CMS.registerPreviewTemplate("Pbanner", withStyledComponentsRendered(ProBannerPreview));
CMS.registerPreviewTemplate("archibranded", withStyledComponentsRendered(ProArchiBrandedPreview));
CMS.registerPreviewTemplate("foodsupplements", withStyledComponentsRendered(ProFoodSupplyPreview));
CMS.registerPreviewTemplate("pharmaceutical", withStyledComponentsRendered(ProPharmaceuticalPreview));
CMS.registerPreviewTemplate("foodsupplements", withStyledComponentsRendered(ProFoodSupplyPreview));
CMS.registerPreviewTemplate("dsolutions", withStyledComponentsRendered(ProDsolutionsPreview));
CMS.registerPreviewTemplate("productdev", withStyledComponentsRendered(ProDevPreview));
CMS.registerPreviewTemplate("team", withStyledComponentsRendered(homeTeamPreview));
CMS.registerPreviewTemplate("bod", withStyledComponentsRendered(homeTeam2Preview));
