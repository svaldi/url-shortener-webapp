import reducer from '../../reducers/url-shortener/url-shortener-reducer';
import * as types from '../../reducers/url-shortener/url-shortener-actionTypes';

describe('urls reducer', () => {
  const INITIAL_STATE = {
    isFetching: false,
    urls: [],
    activeURL: null,
    error: null
  };

  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(INITIAL_STATE);
  });

  it('should handle CREATE_URL_SUCCESS', () => {
    expect(
      reducer(INITIAL_STATE, {
        type: types.CREATE_URL_SUCCESS,
        payload: {
          hash: 'f32fbn4',
          _id: '1',
          url: 'http://www.example.com/hello/mylink'
        }
      })
    ).toEqual({
      isFetching: false,
      urls: [
        {
          hash: 'f32fbn4',
          _id: '1',
          url: 'http://www.example.com/hello/mylink'
        }
      ],
      activeURL: {
        hash: 'f32fbn4',
        _id: '1',
        url: 'http://www.example.com/hello/mylink'
      },
      error: null
    });
  });
});
