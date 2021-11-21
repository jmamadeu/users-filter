import axios from 'axios';
import { QueryClient } from 'react-query';

export const api = axios.create({
  baseURL: 'https://s3.amazonaws.com/technical-challenge/v3'
});

export const queryClient = new QueryClient();
