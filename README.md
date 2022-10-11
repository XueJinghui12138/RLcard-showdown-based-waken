## Rule of WaKen

- 卡牌从大到小的顺序为:3,2,A,K,Q,J,10,9,8,7,6,5,4
- 游戏使用去除大小王的一副扑克牌，共52张，每个玩家发16张牌，剩余4张牌将公开发给地主
- 可出牌型有：
  - 单张如5，对子如55，三头如555，四头如5555，均为以大压小
  - 连牌，4至K中三张以上序列为连牌，例如456，9 10 JQK，跟牌必须出同等牌数，以大压小，如6789压过4567
  - 可以出连对，如445566；可以出三连对，如555666777；可以出四连对，如777788889999；跟牌必须出同等牌数，以大压小
- 地主率先出牌，若地主先于两名农民率先出完所有手牌则地主胜，反之农民胜

## Installation

RLCard-Showdown has separated frontend and backend. The frontend is built with React and the backend is based on Django and Flask.

### Prerequisite

To set up the frontend, you should make sure you have [Node.js](https://nodejs.org/) and NPM installed. Normally you just need to manually install Node.js, and the NPM package would be automatically installed together with Node.js for you. Please refer to its official website for installation of Node.js.（node -v v13.9.0   npm -v 6.13.7）

You can run the following commands to verify the installation

```
node -v
npm -v
```

For backend, make sure that you have **Python 3.6+** and **pip** installed.

### Install Frontend and Backend

The frontend can be installed with the help of NPM:

```
git clone -b master --single-branch --depth=1 https://github.com/datamllab/rlcard-showdown.git
cd rlcard-showdown
npm install
```

The backend of leaderboard can be installed with

```
pip3 install -r requirements.txt
cd server
python3 manage.py migrate
cd ..
```

### Run RLCard-Showdown

1. Launch the backend of leaderboard with
   
   ```
   cd server
   python3 manage.py runserver
   ```

2. 

In a new terminal, start the PvE server (i.e., human vs AI) of DouZero with

```
cd pve_server
python run_douzero.py
```

Alternatively, you can start the server using artificial rules:

```
cd pve_server
python run_mywaken.py
```

They are conceptually the same with minor differences in state representation and training time of the pre-trained models (DouZero is fully trained with more than a month, while DMC in RLCard is only trained for hours).

3. Run the following command in another new terminal under the project folder to start frontend:
   
   ```
   npm start
   ```
   
   You can view PvE demo of Dou Dizhu at [http://127.0.0.1:3000/pve/doudizhu-demo](http://127.0.0.1:3000/pve/doudizhu-demo). 

## RLCard Showdown

This is the GUI support for the [RLCard](https://github.com/datamllab/rlcard) project and [DouZero](https://github.com/kwai/DouZero) project. RLCard-Showdown provides evaluation and visualization tools to help understand the performance of the agents. It includes a replay module, where you can analyze the replays, and a PvE module, where you can play with the AI interactively. Currently, we only support Leduc Hold'em and Dou Dizhu. The frontend is developed with [React](https://reactjs.org/). The backend is based on [Django](https://www.djangoproject.com/) and [Flask](https://flask.palletsprojects.com/). Have fun!

- Official Website: [http://www.rlcard.org](http://www.rlcard.org)

- Tutorial in Jupyter Notebook: [GitHub - datamllab/rlcard-tutorial: Python and R tutorial for RLCard in Jupyter Notebook](https://github.com/datamllab/rlcard-tutorial)

- Paper: https://www.ijcai.org/Proceedings/2020/764

- Document: [Click Here](docs/README.md)

- Online Demo with DouZero: [https://www.douzero.org/](https://www.douzero.org/)RLCard Showdown
  
  This is the GUI support for the [RLCard](https://github.com/datamllab/rlcard) project and [DouZero](https://github.com/kwai/DouZero) project. RLCard-Showdown provides evaluation and visualization tools to help understand the performance of the agents. It includes a replay module, where you can analyze the replays, and a PvE module, where you can play with the AI interactively. Currently, we only support Leduc Hold'em and Dou Dizhu. The frontend is developed with [React](https://reactjs.org/). The backend is based on [Django](https://www.djangoproject.com/) and [Flask](https://flask.palletsprojects.com/). Have fun!
  
  - Official Website: [http://www.rlcard.org](http://www.rlcard.org)
  - Tutorial in Jupyter Notebook: [GitHub - datamllab/rlcard-tutorial: Python and R tutorial for RLCard in Jupyter Notebook](https://github.com/datamllab/rlcard-tutorial)
  - Paper: [RLCard: A Platform for Reinforcement Learning in Card Games | IJCAI](https://www.ijcai.org/Proceedings/2020/764)
  - Document: [Click Here](docs/README.md)
  - Online Demo with DouZero: [https://www.douzero.org/](https://www.douzero.org/)
