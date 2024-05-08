# 一、服务器配置

- **系统：** Linux
- **CPU：** 32核心64线程
- **内存：** 128GB
- **带宽：** 1G上下对等
- **硬盘：** SSD 4T
- **区域：** USA

**eth GitHub地址：** [https://github.com/ethereum/go-ethereum](https://github.com/ethereum/go-ethereum)

搭建ETH全节点需要执行客户端和信标节点客户端都保持同步。本次搭建执行客户端使用Geth，信标节点客户端使用Prysm。

# 二、系统环境

## 更新Ubuntu软件包

```bash
apt-get upgrade
```

## 安装git
```bash
apt install git
```

## 装Golang （安装 Go 主要是为了去编译 go-ethereum 源码）
```bash
apt install golang
```

此命令如果安装不上，请自行度娘手动编译安装最新版本Golang，需要 Go（1.19 或更高版本）

使用go version确认安装正确


```bash
go version
```

如下显示则安装正确。

```bash
[root@localhost ~]# go version
go version go1.19 linux/amd64
```
安装linux下的窗口管理器工具screen
apt install screen
# 三、节点安装部署
## 安装ETH版本的prysm
```bash

 cd /		                #进入根目录
 mkdir eth	                #创建eth文件夹
 cd eth
 mkdir consensus
 mkdir execution
 cd consensus
 mkdir prysm && cd prysm
 curl https://raw.githubusercontent.com/prysmaticlabs/prysm/master/prysm.sh --output prysm.sh && chmod +x prysm.sh
 ./prysm.sh beacon-chain generate-auth-secret
 ```
 
安装ETH版本的geth
```bash
 cd /eth		                #进入eth目录
 git clone https://github.com/ethereum/go-ethereum.git
 make geth 
 cd go-ethereum/build/bin
 ```
# 四、启动ETH信标客户端
```bash
screen -S prysm   #创建prysm启动窗口
./prysm.sh beacon-chain --execution-endpoint=http://localhost:8551 --jwt-secret=/eth/consensus/prysm/jwt.hex
然后按ctrl+ad回到主会话即可
```

# 五、启动ETH执行客户端
```bash
screen -S eth   #创建eth启动窗口
 ./geth --cache 10240   --datadir ./node --ws --ws.port 8546 --ws.addr 0.0.0.0 --ws.origins '*' --authrpc.addr localhost --authrpc.port 8551 --authrpc.vhosts localhost --maxpeers=300 --authrpc.jwtsecret /eth/consensus/prysm/jwt.hex --state.scheme=path
 ```
参数说明： –datadir：指定ETH节点数据库和密钥存储库的数据目录(默认即可) –cache：设置最大分配给内部缓存的内存，默认:1024（设置越大，每次同步的数据越多，消耗的内存也越大） –rpc.allow-unprotected-txs：允许通过RPC提交不受保护的（非 EIP155 签名）交易 –txlookuplimit 0 : 禁用删除事务索引

# 六、节点状态监听
```bash
geth attach http://localhost:8545     #端口如果修改配置文件了，就填写配置文件的端口即可
> eth.syncing	                      #查看当前区块情况,结果为false表示已同步最新区块
说明：

currentBlock: 14290861, #当前同步到区块高度 highestBlock: 14297354, #主网当前高度 knownStates:297473485, pulledStates: 297473485, startingBlock: 14270385

> net.peerCount	  #查看当前连接节点数量
> eth.blockNumber #当前同步到区块高度
退出请按 ctrl+d 回到主会话。

停止执行客户端节点
打开eth窗口

screen -x eth
然后按 ctrl+c 即可

停止信标客户端节点
打开prysm窗口

screen -x prysm
然后按 ctrl+c 即可
```

