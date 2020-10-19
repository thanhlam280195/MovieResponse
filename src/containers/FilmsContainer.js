import React, { useState, useEffect } from "react";
import FilmItem from "../components/FilmItem";
import { GET_MOVIE } from "../Queries/index";
import { Pagination } from "antd";
import { useLazyQuery } from "@apollo/client";
import { useDispatch } from "react-redux";
import { fetch_list_movie } from "../actions/filmsAction";
function FilmsContainer() {
  const [
    loadingDataMovie,
    { data: dataMovie },
  ] = useLazyQuery(GET_MOVIE);
  const dispatch = useDispatch();
  const [dataList, setDataList] = useState([]);
  const [totalItem, setTotalItem] = useState(0);
  useEffect(() => {
    loadingDataMovie({ variables: { page: 1 } });
  }, [loadingDataMovie]);
  useEffect(() => {
    if (dataMovie) {
      dispatch(fetch_list_movie(dataMovie.nowPlaying.movies));
      setDataList(dataMovie.nowPlaying.movies);
      setTotalItem(dataMovie.nowPlaying.total);
    }
  }, [dataMovie, dispatch]);
  const renderFilmItem = () => {
    if (dataList.length) {
      return dataList.map((i) => {
        return <FilmItem image={i.poster_path} id={i.id} key={i.id} />;
      });
    }
  };
  const onChangePage = (page) => {
    loadingDataMovie({ variables: { page: page } });
  };

  return (
    <section className="section">
      <h1 className="section-heading">Danh Sách Phim</h1>
      <div className="row">{renderFilmItem()}</div>
      <div style={{ paddingBottom: 10 }}>
        <Pagination
          defaultCurrent={1}
          total={totalItem}
          onChange={onChangePage}
          showSizeChanger={false}
        />
      </div>
    </section>
  );
}
export default FilmsContainer;
