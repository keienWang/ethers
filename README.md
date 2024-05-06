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
    geth  --cache 32768 --datadir /data/ethereum --http --http.addr 0.0.0.0   --http.api "eth,net,engine,web3" --ws --ws.addr 0.0.0.0  --ws.api "eth,net,engine,web3"  --txlookuplimit 0  --rpc.gascap 0  --rpc.txfeecap 0 --authrpc.addr 0.0.0.0  --authrpc.port 8551  --authrpc.vhosts=* --authrpc.jwtsecret /root/eth/jwt.hex --rpc.allow-unprotected-txs --maxpeers 2000


## 共识层启动命令

    ./prysm.sh beacon-chain --execution-endpoint=http://localhost:8551 --jwt-secret=/root/eth/jwt.hex   --datadir=/data/prysm/data --accept-terms-of-use=true --checkpoint-sync-url=https://beaconstate.info 


    ./lighthouse bn \
  --network mainnet \
  --execution-endpoint http://localhost:8551 \
  --execution-jwt /root/eth/jwt.hex \
  --checkpoint-sync-url https://mainnet.checkpoint.sigp.io \
  --http
