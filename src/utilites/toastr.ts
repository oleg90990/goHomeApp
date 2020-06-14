import { Toast } from 'native-base';

export default {
    error: (message: string, duration = 2500) => {
        Toast.show({
            text: message,
            duration,
            position: "center",
            textStyle: { textAlign: 'center' },
            type: "danger"
          });
    },
    success: (message: string, duration = 2500) => {
        Toast.show({
            text: message,
            duration,
            position: "center",
            textStyle: { textAlign: 'center' },
            type: "success"
          });
    }
};