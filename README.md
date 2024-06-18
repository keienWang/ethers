# 测试与学习 ethers 包

## 简介

该仓库用于测试与学习 ethers 包的新特性。您可以在仓库中找到代码示例和测试，以探索 ethers 提供的各种功能。

## 安装

要开始，请克隆该仓库：

```
git clone https://github.com/yourusername/ethers-testing.git
cd ethers-testing
```

然后，安装依赖项：

```
npm install
```

## 使用方法

### 运行示例

进入 `examples` 目录并使用 Node.js 执行所需的示例脚本：

```
cd examples
node example1.js
```

将 `example1.js` 替换为您想要运行的示例脚本的名称。

### 运行测试

进入 `tests` 目录并使用 Mocha 执行测试脚本：

```
cd tests
npx mocha
```

这将执行 `tests` 目录中的所有测试。

## 贡献

如果您发现任何问题或有改进建议，请随时提出问题或提交拉取请求。欢迎贡献！

## 许可证

本项目使用 MIT 许可证 - 有关详情，请参阅 [LICENSE](LICENSE) 文件。


## 遇到的问题

- 在使用JsonRpcProvider时 rpc 用的infura的，结果总是报错
    ```JsonRpcProvider failed to detect network and cannot start up; retry in 1s```
    -  换个rpc就可以了，原因是因为JsonRpcProvider会尝试在一个请求中一起发送eth_chainId和eth_getBlockByNumber，这是tenderly rpc不支持的（仅支持单一方法批次）。如果节点禁用了批量请求就会遇到错误



## eth启动命令
    geth --cache 32768 --datadir /data/ethereum/ --http --http.addr 0.0.0.0 --http.api "eth,net,engine,web3,debug,admin" --ws --ws.addr 0.0.0.0 --ws.api "eth,net,engine,web3,debug,admin" --txlookuplimit 0 --rpc.gascap 0 --rpc.txfeecap 0 --authrpc.addr 0.0.0.0 --authrpc.port 8551 --authrpc.vhosts=* --authrpc.jwtsecret /eth/jwt.hex --rpc.allow-unprotected-txs --maxpeers 2000 --syncmode full --gcmode=archive



## 共识层启动命令

    ./prysm.sh beacon-chain --execution-endpoint=http://localhost:8551 --jwt-secret=/eth/jwt.hex   --datadir=/data/prysm/data --checkpoint-sync-url https://mainnet.checkpoint.sigp.io


    ./lighthouse bn \
  --network mainnet \
  --execution-endpoint http://localhost:8551 \
  --execution-jwt /eth/jwt.hex \
  --checkpoint-sync-url https://mainnet.checkpoint.sigp.io 



  ## reth启动命令
    reth node --http --http.api all \
    --http.corsdomain "*" --http.addr 0.0.0.0 \
    --metrics 0.0.0.0:9001 \
    --authrpc.jwtsecret /root/jwt.hex \
    --datadir /data2/rethdata



  ./lighthouse bn \
  --network mainnet \
  --execution-endpoint http://localhost:8551 \
  --execution-jwt /root/jwt.hex \
  --checkpoint-sync-url https://mainnet-checkpoint-sync.attestant.io

  ./prysm.sh beacon-chain --execution-endpoint=http://localhost:8551 --jwt-secret=/root/jwt.hex   --datadir=/data/prysm/data --checkpoint-sync-url https://sync-mainnet.beaconcha.in


##查看日志

tail -f ~/.cache/reth/logs/mainnet/reth.log
    









##冷钱包


- nexvault钱包





## 搭建btc节点
  - btc节点较比eth简单，但是命令行配置优先级不如配置文件优先级高
wget https://bitcoincore.org/bin/bitcoin-core-26.1/bitcoin-26.1-x86_64-linux-gnu.tar.gz
tar -xzvf bitcoin-26.1-x86_64-linux-gnu.tar.gz
sudo install -m 0755 -o root -g root -t /usr/local/bin bitcoin-26.1/bin/*

mkdir -p /data/bitcoin_data/data


#### 配置bitcoin配置文件
echo 'server=1
daemon=1
# 如果您想作为一个全节点运行，不需要钱包功能，可以设置disablewallet=1
# disablewallet=1
rpcuser=keien
rpcpassword=
datadir=/data/bitcoin_data/data
rpcallowip=0.0.0.0/0
rpcconnect=127.0.0.1
# 可选：设置比特币核心与网络的连接数
maxconnections=40
txindex=1' >  /data/bitcoin_data/bitcoin.conf


vim /etc/systemd/system/bitcoind.service

[Unit]
Description=Bitcoin's distributed currency daemon
After=network.target

[Service]
User=root
Group=root
Type=forking
ExecStart=/usr/local/bin/bitcoind -daemon -conf=/data/bitcoin_data/bitcoin.conf
[Install]
WantedBy=multi-user.target


##### 查区块信息
 bitcoin-cli getblockchaininfo
 bitcoin-cli -getinfo


 ##### 停止节点
 bitcoind stop

 

//删除命令
 >/var/log/wtem
>/var/log/lastlog
history -c
rm -rf /root/.bash_history



 aria2c -s14 -x14 -k100M https://pub-60a193f9bd504900a520f4f260497d1c.r2.dev/erigon_data_20240520.lz4.001 https://pub-60a193f9bd504900a520f4f260497d1c.r2.dev/erigon_data_20240520.lz4.002 https://pub-60a193f9bd504900a520f4f260497d1c.r2.dev/erigon_data_20240520.lz4.003 https://pub-60a193f9bd504900a520f4f260497d1c.r2.dev/erigon_data_20240520.lz4.004 https://pub-60a193f9bd504900a520f4f260497d1c.r2.dev/erigon_data_20240520.lz4.005 https://pub-60a193f9bd504900a520f4f260497d1c.r2.dev/erigon_data_20240520.lz4.006 https://pub-60a193f9bd504900a520f4f260497d1c.r2.dev/erigon_data_20240520.lz4.007





 