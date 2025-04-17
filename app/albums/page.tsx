import React from "react";

interface TestComponentProps {
  message: string;
}

const TestComponent: React.FC<TestComponentProps> = async () => {
  const response = fetch("https://jsonplaceholder.typicode.com/albums");
  const albums = await (await response).json();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols">
      {albums.map((album: { id: number; title: string }) => (
        <div key={album.id}>
          <h3>{album.title}</h3>
          <p>Album ID: {album.id}</p>
        </div>
      ))}
    </div>
  );
};

export default TestComponent;
