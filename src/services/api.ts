import axios from 'axios';
import { QueryClient } from 'react-query';

export const api = axios.create({
  baseURL: `https://randomuser.me/api`
});

export const queryClient = new QueryClient();
