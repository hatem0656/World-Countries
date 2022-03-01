import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

function useCard(region, name) {
  const selectedRegion = useSelector((state) => state.region.value);
  const searchField = useSelector((state) => state.search.value);
  const [visiable, setVisiable] = useState(true);
  // const [borderNames, setBorderNames] = useState(null);

  const matchWord = () => {
    let matchName = name.slice(0, searchField.length);
    let searchWord = searchField[0].toUpperCase() + searchField.substr(1);
    return matchName === searchWord;
  };

  useEffect(() => {
    if (selectedRegion === region || selectedRegion === "All") {
      if (searchField === "") {
        setVisiable(true);
      } else {
        setVisiable(matchWord);
      }
    } else {
      setVisiable(false);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedRegion, searchField]);

  // useEffect(() => {
  //   if (borders) {
  //     setBorderNames(
  //       borders.map((border) =>
  //         border !== "ISR"
  //           ? document.querySelector(`#${border} a`).innerHTML
  //           : null
  //       )
  //     );
  //   } else {
  //     setBorderNames("no border countries");
  //   }
  // }, [borders]);

  return { visiable };
}

export default useCard;
