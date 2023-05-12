interface IFirebaseConfig {
  apiKey: string;
  authDomain: string;
  databaseURL: string;
  projectId: string;
  storageBucket: string;
  messagingSenderId: string;
  appId: string;
  measurementId: string;
}

const firebaseConfig: IFirebaseConfig = {
  apiKey: 'AIzaSyBzbfo-avBx586O1SzvnNxRdkrkQ0QNY6s',
  authDomain: 'node-test-1fabc.firebaseapp.com',
  databaseURL: 'https://node-test-1fabc-default-rtdb.firebaseio.com',
  projectId: 'node-test-1fabc',
  storageBucket: 'node-test-1fabc.appspot.com',
  messagingSenderId: '109943594158',
  appId: '1:109943594158:web:b492b961d09dff00e5e13f',
  measurementId: 'G-HDS5SHT3QP',
};

export default firebaseConfig;
