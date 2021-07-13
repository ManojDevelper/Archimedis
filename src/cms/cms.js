import CMS from "netlify-cms-app";
import React, { useState, useEffect } from 'react';
import { StyleSheetManager } from 'styled-components';
import { GlobalStyle } from '../styles/global-styles';

import AboutPreview from "./preview-templates/AboutPreview";
import homeBannerPreview from "./preview-templates/homeBannerPreview";
import homeBlogsPreview from "./preview-templates/homeBlogsPreview";
import homeClintsPreview from "./preview-templates/homeClintsPreview";
import homeFooterPreview from "./preview-templates/homeFooterPreview";
import homeOnlinePreview from "./preview-templates/homeOnlinePreview";
import homePatnersPreview from "./preview-templates/homePatnersPreview";
import homeStandoutPreview from "./preview-templates/homeStandoutPreview";
import homeTeamPreview from "./preview-templates/homeTeamPreview";
import homeWedoPreview from "./preview-templates/homeWedoPreview";
import FormBannerPreview from "./preview-templates/FormBannerPreview";

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

CMS.registerPreviewTemplate("about", withStyledComponentsRendered(AboutPreview));
CMS.registerPreviewTemplate("banner", withStyledComponentsRendered(homeBannerPreview));
CMS.registerPreviewTemplate("blogs", withStyledComponentsRendered(homeBlogsPreview));
CMS.registerPreviewTemplate("clints", withStyledComponentsRendered(homeClintsPreview));
CMS.registerPreviewTemplate("footer", withStyledComponentsRendered(homeFooterPreview));
CMS.registerPreviewTemplate("online", withStyledComponentsRendered(homeOnlinePreview));
CMS.registerPreviewTemplate("patners", withStyledComponentsRendered(homePatnersPreview));
CMS.registerPreviewTemplate("standout", withStyledComponentsRendered(homeStandoutPreview));
CMS.registerPreviewTemplate("team", withStyledComponentsRendered(homeTeamPreview));
CMS.registerPreviewTemplate("wedo", withStyledComponentsRendered(homeWedoPreview));
CMS.registerPreviewTemplate("fbanner", withStyledComponentsRendered(FormBannerPreview));
