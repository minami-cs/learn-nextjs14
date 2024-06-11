// [id]는 url parameter를 받는다는 것을 의미한다.
// id는 원래 number만 받을 수 있게 해야 하지만 일단 string으로 처리 
export default function MovieDetail({ params: { id } }: { params: { id: string }}) {
  return <h1>Movie {id}</h1>;
}