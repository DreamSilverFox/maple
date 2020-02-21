import * as PIXI from 'pixi.js'

const Pi = class {
    // id 绘制面板id    width 线条宽度   dis 间距
    constructor (id, width, dis) {
        this.app = new PIXI.Application({ antialias: true, backgroundColor: 0xffffff });
        document.getElementById(id).appendChild(this.app.view);
        this.width = width;
        this.dis = dis;

        this.radiu = dis / 2;
        this.px = dis / 2 + width;
        this.py = width;
        this.Length_Max = 600 - dis - width;
        this.Length = this.Length_Max;

        this.n = 180;
        this.turn = 1; // 1 左->右   -1 右->左
    }

    data(arr) {
        let i = 0
        for (var li of arr) {
            window.console.log(li['ID'] + '::' + li['Length'])
            this.draw(li['Length'], li['Color'])

            i++;
            if(i == 4)
                break;
        }
    }

    // 绘制线
    draw(l, c) {
        do {
            window.console.log('ls:' + l)
            // 判断现在需要绘制的线
            if(this.n != 180) { // 绘制曲线
                window.console.log('arc')
                l = this.draw_arc(l, c)   
            } else { // 绘制直线
                window.console.log('line')
                l = this.draw_line(l, c)
            }
        } while(l != 0)
        
    }

    draw_line(l, c) {
        window.console.log(l)
        if (l > this.Length) { // 判断直线绘制空间不充足
            window.console.log('l_no')
            this.line(this.Length, c);
            let temp = l - this.Length;
            this.Length = this.Length_Max
            this.n = 0; // 进入绘制曲线
            return temp;
        } else {
            window.console.log('l_yes')
            
            this.line(l, c);
            this.Length -= l;
            return 0;
        }
    }

    draw_arc(l, c) {
        // window.console.log(l)
        // window.console.log(((180 - this.n) * this.radiu * Math.PI) / 180)
        if (l >= ((180 - this.n) * this.radiu * Math.PI) / 180) { // 判断曲线绘制空间不足
            window.console.log('a_no')
            this.arc(c, this.n / 180, 0);
            let temp = this.n;
            this.n = 180; // 进入绘制直线
            this.py += this.dis;
            this.turn = -this.turn;
            window.console.log(l - temp * this.radiu * Math.PI / 180)
            return l - temp * this.radiu * Math.PI / 180;

        } else {
            window.console.log('a_yes')
            let nt = 180 * l / this.radiu / Math.PI;
            this.arc(c, this.n / 180, (this.n + nt) / 180);
            this.n += nt;

            return 0;
        }
    }
    // mode = 1 左->右   mode = -1 右->左
    // length 长度
    // color 颜色
    // x,y 定位
    line (l, c) {
        const realPath = new PIXI.Graphics();
        realPath.lineStyle(this.width, c, 1);
        realPath.moveTo(0, 0);
        realPath.lineTo(l * this.turn, 0);

        realPath.position.x = this.px;
        realPath.position.y = this.py;

        this.app.stage.addChild(realPath);

        this.px = this.px + l * this.turn;
        window.console.log('ls: ' + this.px)
    }
    //  mode = 0 右半弧 mode = 1 左半弧
    arc (c, s, e) {
        const arc = new PIXI.Graphics();
        arc.lineStyle(this.width, c, 1);
        arc.arc(this.px, this.py + this.radiu, this.radiu, (-1 * this.turn + s * this.turn) * Math.PI / 2, (this.turn - e * this.turn) * Math.PI / 2);

        this.app.stage.addChild(arc);
    }

}

export default Pi