import { Suspense, useState, useTransition } from "react";
import { fetchProfileData } from "../../api/fakeApi";

function getNextId(id) {
  return id === 3 ? 0 : id + 1;
}

const initialResource = fetchProfileData(0);

const UseTransicao = () => {
  const [resource, setResource] = useState(initialResource);
  const [isPending, startTransition] = useTransition();

  return (
    <div>
      <h1>UseTransicao testes:</h1>
      <button
        onClick={() => {
          startTransition(() => {
            const nextUserId = getNextId(resource.userId);
            setResource(fetchProfileData(nextUserId));
          });
        }}
      >
        Proximo
      </button>

      {isPending ? (
        <div className="status red"> Loading...</div>
      ) : (
        <div className="status green">Pronto!</div>
      )}

      <ProfilePage resource={resource} />

      <div className="texto">
        useTransitione startTransition permitir que você marque algumas
        atualizações de estado como não urgentes. Outras atualizações de estado
        são consideradas urgentes por padrão. O React permitirá atualizações de
        estado urgentes (por exemplo, atualizando uma entrada de texto) para
        interromper atualizações de estado não urgentes (por exemplo,
        renderizando uma lista de resultados de pesquisa).
      </div>
    </div>
  );
};

function ProfilePage({ resource }) {
  return (
    <Suspense fallback={<h1>Loading profile...</h1>}>
      <ProfileDetails resource={resource} />
      <Suspense fallback={<h1>Loading posts...</h1>}>
        <ProfileTimeline resource={resource} />
      </Suspense>
    </Suspense>
  );
}

function ProfileDetails({ resource }) {
  const user = resource.user.read();
  return <h1>{user.name}</h1>;
}

function ProfileTimeline({ resource }) {
  const posts = resource.posts.read();
  return (
    <ul>
      {posts.map((post) => (
        <li key={post.id}>{post.text}</li>
      ))}
    </ul>
  );
}

export default UseTransicao;
