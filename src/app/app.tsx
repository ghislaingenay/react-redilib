// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Alert } from '@lib/Alert';
import { Button } from '@lib/Button';
import Redilib from '@types';
import { useState } from 'react';

export function App() {
  const [loading, setLoading] = useState(false);

  const switchLoadingState = () => {
    console.log('switchLoadingState');
    setLoading(!loading);
  };
  return (
    <div className="p-5 max-w-[1280px]">
      <div className="flex flex-col gap-10">
        <Button buttonType="success" size="large" loading={loading}>
          Success
        </Button>
        <Button
          buttonType="ghost"
          size="medium"
          onClick={() => switchLoadingState()}
        >
          Change loading
        </Button>

        <Alert
          type="success"
          title="Success"
          message="Please check again for more information"
        />
        <Alert
          type="info"
          title="Info"
          message="Please check again for more information"
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
