import {Button} from '..';
import {Button as OriginalButton} from 'react-bootstrap';

describe('bootstrap', () => {
  test('Button', () => {
    expect(Button).toBe(OriginalButton);
  });
});
