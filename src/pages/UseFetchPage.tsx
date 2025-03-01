import useFetch from "@/hooks/useFetch";

interface IPost {
  id: number;
  title: string;
}

export default function UseFetchPage() {
  const fetchPosts = useFetch<IPost[]>("https://jsonplaceholder.typicode.com/posts");

  const { data, isLoading, error, refetch } = fetchPosts;

  return (
    <div>
      <div>
        <button
          onClick={() =>
            refetch({
              params: {
                _limit: "3",
              },
            })
          }
        >
          Перезапросить
        </button>
      </div>
      {isLoading && "Загрузка..."}
      {error && "Произошла ошибка"}
      {!isLoading &&
        data &&
        data.map((item: IPost) => <div key={item.id}>{item.title}</div>)}
    </div>
  );
}
