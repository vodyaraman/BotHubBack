// sse.controller.ts
import { Controller, Sse, MessageEvent } from '@nestjs/common';
import { interval, map, Observable } from 'rxjs';

@Controller('stream')
export class StreamController {
  @Sse()
  stream(): Observable<MessageEvent> {
    return interval(1000).pipe(
      map(() => ({ data: { message: 'Streaming data...' } })),
    );
  }
}
