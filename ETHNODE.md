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