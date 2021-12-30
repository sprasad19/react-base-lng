import React, { useEffect } from "react";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";
import { compose } from "redux";
import { memo } from "react";
import { useTranslation } from "react-i18next";
import { makeSelectLanguage } from "../redux/redux/global/selectors";
// import { usePrevious } from "../hooks/usePrevious";

export default function Translate(ComposedComponent) {
  function HOC(props) {
    // const prev = usePrevious(props.lang);
    const [t, i18n] = useTranslation("common");
    useEffect(() => {
      i18n.changeLanguage(props.lang || "en", ()=>{
        console.log("Language change");
      });
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [props.lang,i18n ] );

    return <ComposedComponent t={t} i18n={i18n} />;
  }
  const mapStateToProps = createStructuredSelector({
    lang: makeSelectLanguage(),
  });

  const withConnect = connect(mapStateToProps, null);

  return compose(withConnect, memo)(HOC);
}
