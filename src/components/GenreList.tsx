import useGenres from "../hooks/useGenres";

const GenreList = () => {
  const { data } = useGenres();

  return (
    <ul>
      {data.map((data) => (
        <li>{data.name}</li>
      ))}
    </ul>
  );
};

export default GenreList;
