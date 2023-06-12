import IndexView from './src/views/IndexView';
import { UserProvider } from './src/views/components/Context';

export default function App() {
  return (
    <UserProvider>
      <IndexView />
    </UserProvider>
  );
}
