import Main from '../main/main';

type AppProps = {
  placesCount: number
}

function App({ placesCount }: AppProps) {
  return <Main placesCount={placesCount} />;
}

export default App;
