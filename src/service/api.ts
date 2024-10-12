import request from './request'

export const getAccessToken = (data: any) => request.post('/oauth/token', data)
export const getCreateRepos = (data: any) => request.post('/api/v5/user/repos', data)
// export const getReposView = (data: any) => request.post('api/v5/users/repos', data)
