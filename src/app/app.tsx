// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Alert } from '@lib/Alert';

export function App() {
  return (
    <div>
      <div className="flex flex-col gap-10">
        <Alert
          type="success"
          title="Success"
          message="Please check again for more information"
        />
        <Alert
          type="info"
          title="Info"
          message="Please check again for more information"
          border
        />
        <Alert
          type="warning"
          title="Warning"
          message="Please check again for more information"
        />
        <Alert
          type="error"
          title="Error"
          message="Please check again for more information"
        />
      </div>
    </div>
  );
}

export default App;
