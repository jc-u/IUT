function extractPageNumber(route) {
  const querystring = new URLSearchParams(route.split("?")[1]);
  return parseInt(querystring.get("page") ?? 0, 10);
}

function extractParamName(hydraParam) {
  const hydraParamRegexp = /^hydra:(.*)$/;
  const matches = hydraParam.match(hydraParamRegexp);
  return matches[1];
}

export default function paginationFromHydraView(hydraView) {
  return ["hydra:first", "hydra:last", "hydra:next", "hydra:previous"].reduce(
    (res, property) =>
      hydraView[property]
        ? {
            ...res,
            [extractParamName(property)]: extractPageNumber(
              hydraView[property]
            ),
          }
        : res,
    { current: extractPageNumber(hydraView["@id"]) }
  );
}
