import { MockabilityResponses } from '@c1/mockability';

import { requests } from './accounts';
import { creditCardMocks } from './creditcard';

export const mocks: MockabilityResponses = [
  ...requests,
  ...creditCardMocks
];
