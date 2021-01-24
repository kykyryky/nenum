import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'ping';
  }

  getMatrix(ms: number): any {
    const date = new Date(ms);
    const day = date.getDate().toString(10);
    const month = (date.getMonth() + 1).toString(10);
    const year = date.getFullYear().toString(10);
    
    const destiny = this.derive([...day, ...month, ...year]);
    
    // 3
    const first = this.sum([...day, ...month, ...year]);
    
    // 4
    const second = this.sum([...(first.toString())]);
    
    // 5
    const third = parseInt(first) - (parseInt(day[0]) * 2);
    
    // 6
    const fourth = this.sum([...third.toString()]);
    
    const seq1 = [...this.addZero(day), ...this.addZero(month), ...this.addZero(year)];
    const seq2 = [...this.addZero(first), ...this.addZero(second), ...this.addZero(third), ...this.addZero(fourth)];
    
    // 7
    const matrix = {};
    [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].forEach((n) => {
        matrix[n.toString()] = 0;
    });
    
    seq1.forEach((str) => {
        matrix[str]++;
    });
    
    seq2.forEach((str) => {
        matrix[str]++;
    });
    
    const line1 = [matrix[3] + matrix[5] + matrix[7]];
    const line2 = [this.print(1, matrix[1]), this.print(4, matrix[4]), this.print(7, matrix[7]), matrix[1] + matrix[4] + matrix[7]];
    const line3 = [this.print(2, matrix[2]), this.print(5, matrix[5]), this.print(8, matrix[8]), matrix[2] + matrix[5] + matrix[8]];
    const line4 = [this.print(3, matrix[3]), this.print(6, matrix[6]), this.print(9, matrix[9]), matrix[3] + matrix[6] + matrix[9]];
    const line5 = [
        matrix[1] + matrix[2] + matrix[3],
        matrix[4] + matrix[5] + matrix[6],
        matrix[7] + matrix[8] + matrix[9],
        matrix[1] + matrix[5] + matrix[9]
    ];
    
    const additional = [first, second, third, fourth];
    
    return {
        destiny, additional, lines: [line1, line2, line3, line4, line5]
    };  
  }

  order(): string {
    return 'Order recieved';
  }

  private print(num, times) {
    let result = '';
    for (let i = 0; i < times; i++) {
        result += num.toString();
    }
    return result;
  }

  private addZero(number) {
      const str = number.toString();
      return str.length === 1 ? '0' + str : str;
  }

  private derive(input) {
      let result = input.join();
      let nums = input;

      while (result.length !== 1 && result != '11') {
          result = this.sum(nums);
          nums = [...result];
      }
      return result;
  }

  private sum(nums = []) {
      return nums.map(str => parseInt(str)).reduce((acc, num) => acc + num, 0).toString(10);
  }
}
