export class wsClient {
  private readonly wsIns;
  private stompClient;
  private isConnected = false;
  private maxReconnectAttempts = 5;
  private curRetryNum = 0;

  constructor() {
    this.wsIns = new SockJS('http://192.168.12.183:8088/ws/xiaolv');
    console.log('this.wsIns', this.wsIns);
    this.stompClient = Stomp.over(this.wsIns);
    this.stompClient.connect(
      {
        name: 'app',
      },
      (frame: any) => {
        this.stompClient.subscribe(`/topic/ServerToClient.hello`, function (data: any) {
          const mes = data.body;
        });
      }
    );
    setTimeout(() => {
      this.stompClient.send(
        '/ClientToServer/hello',
        {},
        JSON.stringify({
          name: '123',
        })
      );
    }, 5000);
  }

  async connect() {}
}
