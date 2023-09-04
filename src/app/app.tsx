// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Alert } from '@lib/Alert';
import { Button, EButtonSize, EButtonType } from '@lib/Button';
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
        <Button
          buttonType={EButtonType.SUCCESS}
          size={EButtonSize.LARGE}
          loading={loading}
        >
          Success
        </Button>
        <Button
          buttonType={EButtonType.GHOST}
          size={EButtonSize.MEDIUM}
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
