'use strict';
game.import('card',function(lib,game,ui,get,ai,_status){
	return {
		name:'gujian',
	    card:{
	        luyugeng:{
	            fullskin:true,
	            type:'food',
	            enable:true,
	            filterTarget:function(card,player,target){
	                return !target.hasSkill('luyugeng');
	            },
	            range:{global:1},
	            content:function(){
	                target.$gain2(cards);
	                target.storage.luyugeng=card;
	                target.storage.luyugeng_markcount=2;
	                target.addSkill('luyugeng');
	            },
	            ai:{
	                order:2,
	                value:4,
	                result:{
	                    target:1
	                }
	            }
	        },
	        jinlianzhu:{
	            type:'trick',
				fullskin:true,
	            filterTarget:true,
				global:'g_jinlianzhu',
	            content:function(){
	                var evt=event.getParent(3)._trigger;
	                evt.untrigger();
	                evt.finish();
	                if(evt.source){
	                    evt.source.draw();
	                }
	            },
	            ai:{
	                order:1,
	                value:[5,1],
	                useful:[6,1],
	                result:{
	                    target:function(player,target){
	                        var evt=_status.event.getTrigger();
	                        var eff=get.damageEffect(target,evt.source,target,evt.nature);
	                        if(eff>0) return -1;
	                        if(eff<0) return 2;
	                        return 0;
	                    }
	                }
	            }
	        },
	        chunbing:{
	            fullskin:true,
	            type:'food',
	            enable:true,
	            filterTarget:function(card,player,target){
	                return !target.hasSkill('chunbing');
	            },
	            range:{global:1},
	            content:function(){
	                target.$gain2(cards);
	                target.storage.chunbing=card;
	                target.storage.chunbing_markcount=5;
	                target.addSkill('chunbing');
	            },
	            ai:{
	                order:2,
	                value:4,
	                result:{
	                    target:function(player,target){
	                        var num=target.needsToDiscard();
	                        if(num){
	                            if(target==player&&num>1){
	                                return num;
	                            }
	                            return Math.sqrt(num);
	                        }
	                        return 0;
	                    }
	                }
	            }
	        },
	        gudonggeng:{
	            fullskin:true,
	            type:'food',
	            enable:true,
	            filterTarget:function(card,player,target){
	                return !target.hasSkill('gudonggeng');
	            },
	            range:{global:1},
	            content:function(){
	                target.$gain2(cards);
	                target.storage.gudonggeng=card;
	                target.storage.gudonggeng_markcount=3;
	                target.addSkill('gudonggeng');
	            },
	            ai:{
	                order:2,
	                value:4,
	                result:{
	                    target:function(player,target){
	                        if(player==target&&!player.hasShan()) return 2;
	                        return 1/Math.max(1,target.hp);
	                    }
	                }
	            }
	        },
	        liyutang:{
	            fullskin:true,
	            type:'food',
	            enable:true,
	            filterTarget:function(card,player,target){
	                return !target.hasSkill('liyutang');
	            },
	            range:{global:1},
	            content:function(){
	                target.$gain2(cards);
	                target.storage.liyutang=card;
	                target.storage.liyutang_markcount=2;
	                target.addSkill('liyutang');
	            },
	            ai:{
	                order:2,
	                value:4,
	                result:{
	                    target:function(player,target){
	                        if(player==target&&target.isMinHp()) return 2;
	                        if(target.isMinHp()) return 1.5;
	                        return 1/Math.max(1,target.hp);
	                    }
	                }
	            }
	        },
	        mizhilianou:{
	            fullskin:true,
	            type:'food',
	            enable:true,
	            filterTarget:function(card,player,target){
	                return !target.hasSkill('mizhilianou');
	            },
	            range:{global:1},
	            content:function(){
	                target.$gain2(cards);
	                target.storage.mizhilianou=card;
	                target.storage.mizhilianou_markcount=4;
	                target.addSkill('mizhilianou');
	            },
	            ai:{
	                order:2,
	                value:4,
	                result:{
	                    target:function(player,target){
	                        if(target==player){
	                            if(target.countCards('he',{suit:'heart'})){
	                                if(target.isDamaged()) return 1.5;
	                            }
	                            else{
	                                return 0.2;
	                            }
	                        }
	                        else if(target.isDamaged()){
	                            return 1;
	                        }
	                        return 0.5;
	                    }
	                }
	            }
	        },
	        xiajiao:{
	            fullskin:true,
	            type:'food',
	            enable:true,
	            filterTarget:function(card,player,target){
	                return !target.hasSkill('xiajiao');
	            },
	            range:{global:1},
	            content:function(){
	                target.$gain2(cards);
	                target.storage.xiajiao=card;
	                target.storage.xiajiao_markcount=3;
	                target.addSkill('xiajiao');
	                target.addTempSkill('xiajiao3');
	            },
	            ai:{
	                order:2,
	                value:5,
	                result:{
	                    target:1
	                }
	            }
	        },
	        tanhuadong:{
	            fullskin:true,
	            type:'food',
	            enable:true,
	            filterTarget:function(card,player,target){
	                return !target.hasSkill('tanhuadong');
	            },
	            range:{global:1},
	            content:function(){
	                target.$gain2(cards);
	                target.storage.tanhuadong=card;
	                target.storage.tanhuadong_markcount=3;
	                target.addSkill('tanhuadong');
	            },
	            ai:{
	                order:2,
	                value:5,
	                result:{
	                    target:1
	                }
	            }
	        },
	        mapodoufu:{
	            fullskin:true,
	            type:'food',
	            enable:true,
	            filterTarget:function(card,player,target){
	                return !target.hasSkill('mapodoufu');
	            },
	            range:{global:1},
	            content:function(){
	                target.$gain2(cards);
	                target.storage.mapodoufu=card;
	                target.storage.mapodoufu_markcount=2;
	                target.addSkill('mapodoufu');
	            },
	            ai:{
	                order:2,
	                value:5,
	                result:{
	                    target:function(player,target){
	                        return player==target?2:1;
	                    }
	                }
	            }
	        },
	        qingtuan:{
	            fullskin:true,
	            type:'food',
	            enable:true,
	            filterTarget:function(card,player,target){
	                return !target.hasSkill('qingtuan');
	            },
	            range:{global:1},
	            content:function(){
	                target.$gain2(cards);
	                target.storage.qingtuan=card;
	                target.storage.qingtuan_markcount=2;
	                target.addSkill('qingtuan');
	            },
	            ai:{
	                order:4,
	                value:4,
	                result:{
	                    target:function(player,target){
	                        if(target==player){
	                            if(target.hasSha()) return 2;
	                        }
	                        else{
	                            var nh=target.countCards('h');
	                            if(nh>=3) return 1;
	                            if(target.hasSha()) return 1;
	                            if(nh&&Math.random()<0.5) return 1;
	                        }
	                        return player.needsToDiscard()?0.2:0;
	                    }
	                }
	            }
	        },
	        yougeng:{
	            fullskin:true,
	            type:'food',
	            enable:true,
	            filterTarget:function(card,player,target){
	                return !target.hasSkill('yougeng');
	            },
	            range:{global:1},
	            content:function(){
	                target.$gain2(cards);
	                target.storage.yougeng=card;
	                target.storage.yougeng_markcount=2;
	                target.addSkill('yougeng');
	            },
	            ai:{
	                order:2,
	                value:4,
	                result:{
	                    target:function(player,target){
	                        if(target.isHealthy()) return player.needsToDiscard()?0.1:0;
	                        if(target.isMinHp()) return 1.5;
	                        return 1/Math.max(1,target.hp);
	                    }
	                }
	            }
	        },
	        molicha:{
	            fullskin:true,
	            type:'food',
	            enable:true,
	            filterTarget:function(card,player,target){
	                return !target.hasSkill('molicha');
	            },
	            range:{global:1},
	            content:function(){
	                target.$gain2(cards);
	                target.discard(target.getCards('j'));
	                target.storage.molicha=card;
	                target.storage.molicha_markcount=5;
	                target.addSkill('molicha');
	            },
	            ai:{
	                order:2,
	                value:4,
	                result:{
	                    target:function(player,target){
	                        if(target.countCards('j')) return 2;
	                        return 1;
	                    }
	                }
	            }
	        },
	        yuanbaorou:{
	            fullskin:true,
	            type:'food',
	            enable:true,
	            filterTarget:function(card,player,target){
	                return !target.hasSkill('yuanbaorou');
	            },
	            range:{global:1},
	            content:function(){
	                target.$gain2(cards);
	                target.storage.yuanbaorou=card;
	                target.storage.yuanbaorou_markcount=3;
	                target.addSkill('yuanbaorou');
	            },
	            ai:{
	                order:2,
	                value:4,
	                result:{
	                    target:function(player,target){
	                        if(target==player){
	                            if(target.hasSha()) return 2;
	                        }
	                        else{
	                            var nh=target.countCards('h');
	                            if(nh>=3) return 1;
	                            if(target.hasSha()) return 1;
	                            if(nh&&Math.random()<0.5) return 1;
	                        }
	                        return player.needsToDiscard()?0.2:0;
	                    }
	                }
	            }
	        },
	        heilonglinpian:{
	            fullskin:true,
	            type:'trick',
	            enable:true,
				toself:true,
	            filterTarget:function(card,player,target){
	                return target==player;
	            },
	            selectTarget:-1,
	            modTarget:true,
	            content:function(){
	                target.changeHujia();
	                target.addTempSkill('heilonglinpian',{player:'phaseBegin'});
	            },
	            ai:{
	                value:[6,1],
	                useful:1,
	                order:2,
	                result:{
	                    target:1
	                }
	            }
	        },
	        mutoumianju:{
	            fullskin:true,
	            type:'equip',
	            subtype:'equip2',
	            skills:['mutoumianju_skill'],
	            ai:{
	                equipValue:4
	            }
	        },
	        yuheng:{
	            fullskin:true,
	            type:'equip',
	            subtype:'equip5',
	            nopower:true,
	            nomod:true,
	            unique:true,
	            skills:['yuheng_skill'],
	            ai:{
	                equipValue:function(card,player){
	                    if(player.hp>=4) return 5;
	                    if(player.hp>=3) return 4;
	                    if(player.hp>=2) return 2;
	                    return 1;
	                },
					basic:{
						equipValue:4
					}
	            }
	        },
	        yuheng_plus:{
	            fullskin:true,
	            type:'equip',
	            subtype:'equip5',
	            nopower:true,
	            unique:true,
	            nomod:true,
	            epic:true,
	            cardimage:'yuheng',
	            skills:['yuheng_plus_skill'],
	            ai:{
	                equipValue:function(card,player){
	                    if(player.hp>=4) return 7;
	                    if(player.hp>=3) return 6;
	                    if(player.hp>=2) return 2.5;
	                    return 1;
	                },
					basic:{
						equipValue:5
					}
	            }
	        },
	        yuheng_pro:{
	            fullskin:true,
	            type:'equip',
	            subtype:'equip5',
	            nopower:true,
	            unique:true,
	            nomod:true,
	            legend:true,
	            cardimage:'yuheng',
	            skills:['yuheng_pro_skill'],
	            ai:{
	                equipValue:function(card,player){
	                    if(player.hp>=4) return 7.5;
	                    if(player.hp>=3) return 6;
	                    if(player.hp>=2) return 2.5;
	                    return 1;
	                },

					basic:{
						equipValue:7
					}
	            }
	        },
	        shujinsan:{
	            fullskin:true,
	            type:'basic',
	            enable:true,
	            filterTarget:function(card,player,target){
	                return target.countCards('he')>0;
	            },
	            content:function(){
	                'step 0'
	                target.chooseToDiscard('he',[1,target.countCards('he')],'弃置任意张牌并摸等量的牌').ai=function(card){
	                    return 6-get.value(card);
	                }
	                'step 1'
	                if(result.bool){
	                    target.draw(result.cards.length);
	                }
	            },
	            ai:{
	                order:1.5,
	                value:[4,1],
					norepeat:1,
	                result:{
	                    target:function(player,target){
	                        if(target==player){
	                            var cards=player.getCards('he');
	                            var num=-1;
	                            for(var i=0;i<cards.length;i++){
	                                if(get.value(cards[i])<6) num++;
	                            }
	                            if(player.needsToDiscard()&&num<1){
	                                num=1;
	                            }
	                            return Math.max(0,num);
	                        }
	                        else{
	                            if(!player.needsToDiscard()&&target.countCards('he')<=3){
	                                return 0;
	                            }
	                            return target.countCards('he')/2;
	                        }
	                    }
	                }
	            }
	        },
	        ziyangdan:{
	            fullskin:true,
	            type:'basic',
	        },
	        yunvyuanshen:{
	            fullskin:true,
				type:'basic',
				enable:true,
				logv:false,
				filterTarget:function(card,player,target){
					return !target.hasSkill('yunvyuanshen_skill');
				},
				content:function(){
	                target.storage.yunvyuanshen_skill=game.createCard('yunvyuanshen');
					target.addSkill('yunvyuanshen_skill');
					if(cards&&cards.length){
						card=cards[0];
					}
					if(target==targets[0]&&card.clone&&(card.clone.parentNode==player.parentNode||card.clone.parentNode==ui.arena)){
						card.clone.moveDelete(target);
						game.addVideo('gain2',target,get.cardsInfo([card]));
					}
				},
				ai:{
					basic:{
						value:9,
						useful:4,
					},
					order:2,
					result:{
						target:function(player,target){
							return 1/Math.sqrt(1+target.hp);
						},
					},
				}
	        },
	        // liuxiaxianniang:{
	        //     fullskin:true,
	        //     type:'basic',
	        // },
	        bingpotong:{
	            fullskin:true,
				type:'jiguan',
				enable:true,
	            wuxieable:true,
				filterTarget:function(card,player,target){
					return target.countCards('h')>0;
				},
				selectTarget:[1,3],
				content:function(){
					"step 0"
					if(target.countCards('h')==0||player.countCards('h')==0){
						event.finish();
						return;
					}
	                var rand=Math.random()<0.5;
					player.chooseCard('请展示一张手牌',true).set('ai',function(){
						var num=0;
	                    if(get.color(card)=='red'){
	                        if(rand) num-=6;
	                    }
	                    else{
	                        if(!rand) num-=6;
	                    }
	                    var value=get.value(card);
	                    if(value>=8) return -100;
						return num-value;
					}).prompt2='若与'+get.translation(target)+'展示的牌相同，你弃置展示的牌，'+get.translation(target)+'失去一点体力';
					"step 1"
					event.card1=result.cards[0];
	                var rand=Math.random()<0.5;
					target.chooseCard('请展示一张手牌',true).set('ai',function(card){
	                    var num=0;
	                    if(get.color(card)=='red'){
	                        if(rand) num-=6;
	                    }
	                    else{
	                        if(!rand) num-=6;
	                    }
	                    var value=get.value(card);
	                    if(value>=8) return -100;
						return num-value;
					}).prompt2='若与'+get.translation(player)+'展示的牌相同，'+get.translation(player)+'弃置展示的牌，你失去一点体力';
					"step 2"
					event.card2=result.cards[0];
					ui.arena.classList.add('thrownhighlight');
					game.addVideo('thrownhighlight1');
					player.$compare(event.card1,target,event.card2);
					game.delay(4);
					"step 3"
					game.log(player,'展示了',event.card1);
					game.log(target,'展示了',event.card2);
					if(get.color(event.card2)==get.color(event.card1)){
						player.discard(event.card1).animate=false;
						target.$gain2(event.card2);
						var clone=event.card1.clone;
						if(clone){
							clone.style.transition='all 0.5s';
							clone.style.transform='scale(1.2)';
							clone.delete();
							game.addVideo('deletenode',player,get.cardsInfo([clone]));
						}
						target.loseHp();
	                    event.finish();
						event.parent.cancelled=true;
					}
					else{
						player.$gain2(event.card1);
	                    target.$gain2(event.card2);
	                    game.delay();
					}
					ui.arena.classList.remove('thrownhighlight');
					game.addVideo('thrownhighlight2');
	                "step 4"
	                // if(cards&&cards.length){
	                //     player.gain(cards,'gain2');
	                //     target.addTempSkill('bingpotong');
	                // }
				},
				ai:{
					basic:{
						order:2,
						value:[5,1],
						useful:1,
					},
					result:{
						player:function(player,target){
							if(player.countCards('h')<=Math.min(5,Math.max(2,player.hp))&&_status.event.name=='chooseToUse'){
								if(typeof _status.event.filterCard=='function'&&
									_status.event.filterCard({name:'bingpotong'})){
									return -10;
								}
								if(_status.event.skill){
									var viewAs=get.info(_status.event.skill).viewAs;
									if(viewAs=='bingpotong') return -10;
									if(viewAs&&viewAs.name=='bingpotong') return -10;
								}
							}
							return 0;
						},
						target:function(player,target){
							if(player.countCards('h')<=1) return 0;
							return -1.5;
						}
					},
					tag:{
						loseHp:1
					}
				}
	        },
	        feibiao:{
	            type:'jiguan',
				enable:true,
				fullskin:true,
	            wuxieable:true,
				filterTarget:function(card,player,target){
					return get.distance(player,target)>1;
				},
				content:function(){
					"step 0"
					if(!target.countCards('h',{color:'black'})){
						target.loseHp();
						event.finish();
					}
					else{
						target.chooseToDiscard({color:'black'},'弃置一张黑色手牌或受流失一点体力').ai=function(card){
							return 8-get.value(card);
						};
					}
					"step 1"
					if(!result.bool){
						target.loseHp();
					}
				},
				ai:{
					basic:{
						order:9,
						value:3,
						useful:1,
					},
					result:{
						target:-2
					},
					tag:{
						discard:1,
						loseHp:1
					}
				}
	        },
	        qiankunbiao:{
	            type:'jiguan',
				enable:true,
				fullskin:true,
	            wuxieable:true,
	            filterTarget:function(card,player,target){
	                return target!=player&&target.countCards('he')>0;
	            },
	            changeTarget:function(player,targets){
	                game.filterPlayer(function(current){
	                    return get.distance(targets[0],current,'pure')==1&&current.countCards('he');
	                },targets);
				},
	            content:function(){
	                var he=target.getCards('he');
	                if(he.length){
	                    target.discard(he.randomGet()).delay=false;
	                }
	            },
	            contentAfter:function(){
	                game.delay(0.5);
	            },
	            ai:{
	                order:7,
	                tag:{
	                    loseCard:1,
	                    discard:1,
	                },
	                wuxie:function(){
	                    return 0;
	                },
	                result:{
	                    player:function(player,target){
	                        return game.countPlayer(function(current){
	                            if(current==target||(get.distance(target,current,'pure')==1&&current.countCards('he'))){
	        						return -get.sgn(get.attitude(player,current));
	        					}
	                        });
	                    }
	                }
	            }
	        },
	        // wenhuangsan:{
	        //     type:'jiguan',
			// 	enable:true,
			// 	fullskin:true,
	        // },
	        // tuhunsha:{
	        //     type:'jiguan',
			// 	enable:true,
			// 	fullskin:true,
	        // },
	        // shenhuofeiya:{
	        //     type:'jiguan',
			// 	enable:true,
			// 	fullskin:true,
	        // },
	        mianlijinzhen:{
	            type:'jiguan',
				enable:true,
				fullskin:true,
	            filterTarget:function(card,player,target){
	                return target!=player;
	            },
	            content:function(){
	                'step 0'
	                target.draw('visible');
	                'step 1'
	                if(Array.isArray(result)&&get.suit(result[0])=='spade'){
	                    return;
	                }
	                else{
	                    target.damage();
	                }
	            },
	            ai:{
	                order:2,
	                value:[4,1],
	                useful:1,
	                result:{
	                    target:-1.5
	                },
	                tag:{
	                    damage:1
	                }
	            }
	        },
	        // longxugou:{
	        //     type:'jiguan',
			// 	enable:true,
			// 	fullskin:true,
	        // },
	        liutouge:{
	            type:'jiguan',
				enable:true,
				fullskin:true,
	            filterTarget:true,
	            wuxieable:true,
	            content:function(){
	                if(player.getEnemies().contains(target)){
	                    target.getDebuff();
	                }
	                else{
	                    target.getBuff();
	                }
	            },
	            ai:{
	                order:4,
	                value:5,
	                result:{
	                    player:function(player,target){
	                        if(get.attitude(player,target)==0) return 0;
	                        return 1;
	                    }
	                }
	            }
	        },
	        liufengsan:{
	            type:'trick',
				enable:true,
				fullskin:true,
	            filterTarget:true,
	            content:function(){
	                var list=[];
	                for(var i=0;i<2;i++){
	                    list.push(game.createCard('shan'));
	                }
	                target.gain(list,'gain2');
	            },
	            ai:{
	                order:4.5,
					value:[5,1],
					tag:{
						gain:1
					},
	                result:{
	                    target:function(player,target){
	                        if(target==player){
	                            if(!target.hasShan()) return 2;
	                            var num=target.needsToDiscard(2);
	                            if(num==0) return 1.5;
	                            if(num==1) return 1;
	                            return 0.5;
	                        }
	                        else{
	                            switch(target.countCards('h')){
	                                case 0:return 2;
	                                case 1:return 1.5;
	                                case 2:return 1;
	                                default:return 0.5;
	                            }
	                        }
	                    }
	                }
	            }
	        },
	        shihuifen:{
	            type:'trick',
				fullskin:true,
	            filterTarget:true,
				global:'g_shihuifen',
	            content:function(){
	                'step 0'
					var next=_status.currentPhase.chooseToRespond({name:'shan'});
	                next.set('prompt2','否则本回合无法对其他角色使用卡牌');
	                'step 1'
	                if(!result.bool){
	                    _status.currentPhase.addTempSkill('shihuifen','phaseUseAfter');
	                }
	            },
	            ai:{
	                order:1,
	                value:[5,1],
	                useful:[5,1],
	                tag:{
	                    respond:1,
						respondShan:1,
	                },
	                result:{
	                    target:function(player,target){
	                        if(target.countCards('h')>=3||target.needsToDiscard()) return -1.5;
	                        return 0;
	                    }
	                }
	            }
	        },
	    },
	    skill:{
	        luyugeng:{
	            mark:'card',
	            trigger:{player:'phaseBegin'},
	            forced:true,
	            popup:false,
	            nopop:true,
	            intro:{
	                content:function(storage,player){
	                    return '准备阶段，你对一名体力值全场最高的随机敌人造成一点雷属性伤害（剩余'+player.storage.luyugeng_markcount+'回合）'
	                }
	            },
	            content:function(){
	                var list=player.getEnemies();
	                for(var i=0;i<list.length;i++){
	                    if(!list[i].isMaxHp()){
	                        list.splice(i--,1);
	                    }
	                }
	                if(list.length){
	                    var target=list.randomGet();
	                    player.logSkill('luyugeng',target,'thunder');
	                    target.damage('thunder');
	                }
	                player.storage.luyugeng_markcount--;
	                if(player.storage.luyugeng_markcount==0){
	                    delete player.storage.luyugeng;
	                    delete player.storage.luyugeng_markcount;
	                    player.removeSkill('luyugeng');
	                }
	                else{
	                    player.updateMarks();
	                }
	            },
	        },
	        xiajiao:{
	            mark:'card',
	            trigger:{player:['phaseUseBefore','phaseEnd']},
	            forced:true,
	            popup:false,
	            nopop:true,
	            filter:function(event,player){
	                return !player.hasSkill('xiajiao3');
	            },
	            intro:{
	                content:function(storage,player){
	                    return '你在摸牌阶段额外摸一张牌，并在摸牌阶段时弃置一张牌（剩余'+player.storage.xiajiao_markcount+'回合）'
	                }
	            },
	            content:function(){
	                player.storage.xiajiao_markcount--;
	                if(player.storage.xiajiao_markcount==0){
	                    delete player.storage.xiajiao;
	                    delete player.storage.xiajiao_markcount;
	                    player.removeSkill('xiajiao');
	                }
	                else{
	                    player.updateMarks();
	                }
	                player.addTempSkill('xiajiao3');
	            },
	            group:'xiajiao_draw',
	            subSkill:{
	                draw:{
	                    trigger:{player:'phaseDrawBegin'},
	                    forced:true,
	                    content:function(){
	                        trigger.num++;
	                        player.addTempSkill('xiajiao2');
	                    }
	                }
	            }
	        },
	        xiajiao2:{
	            trigger:{player:'phaseDrawAfter'},
	            silent:true,
	            content:function(){
	                player.chooseToDiscard('he',true);
	            }
	        },
	        xiajiao3:{},
	        mizhilianou:{
	            mark:'card',
	            trigger:{player:'phaseAfter'},
	            forced:true,
	            popup:false,
	            nopop:true,
	            intro:{
	                content:function(storage,player){
	                    return '你可以将一张红桃牌当作桃使用（剩余'+player.storage.mizhilianou_markcount+'回合）'
	                }
	            },
	            content:function(){
	                player.storage.mizhilianou_markcount--;
	                if(player.storage.mizhilianou_markcount==0){
	                    delete player.storage.mizhilianou;
	                    delete player.storage.mizhilianou_markcount;
	                    player.removeSkill('mizhilianou');
	                }
	                else{
	                    player.updateMarks();
	                }
	            },
	            group:'mizhilianou_use',
	            subSkill:{
	                use:{
	                    enable:'chooseToUse',
	        			filterCard:{suit:'heart'},
	        			position:'he',
	        			viewAs:{name:'tao'},
	                    viewAsFilter:function(player){
	                        return player.countCards('he',{suit:'heart'})>0;
	                    },
	        			prompt:'将一张红桃牌当桃使用',
	        			check:function(card){return 10-get.value(card)},
	        			ai:{
	        				skillTagFilter:function(player){
	        					return player.countCards('he',{suit:'heart'})>0;
	        				},
	        				save:true,
	        			}
	                }
	            }
	        },
	        chunbing:{
	            mark:'card',
	            trigger:{player:'phaseAfter'},
	            forced:true,
	            popup:false,
	            nopop:true,
	            intro:{
	                content:function(storage,player){
	                    return '你的手牌上限+1（剩余'+player.storage.chunbing_markcount+'回合）'
	                }
	            },
	            mod:{
					maxHandcard:function(player,num){
						return num+1;
					}
				},
	            content:function(){
	                player.storage.chunbing_markcount--;
	                if(player.storage.chunbing_markcount==0){
	                    delete player.storage.chunbing;
	                    delete player.storage.chunbing_markcount;
	                    player.removeSkill('chunbing');
	                }
	                else{
	                    player.updateMarks();
	                }
	            },
	        },
	        gudonggeng:{
	            mark:'card',
	            trigger:{player:'phaseBegin'},
	            forced:true,
	            popup:false,
	            nopop:true,
	            intro:{
	                content:function(storage,player){
	                    return '当你下一次受到杀造成的伤害时，令伤害-1（剩余'+player.storage.gudonggeng_markcount+'回合）'
	                }
	            },
	            content:function(){
	                player.storage.gudonggeng_markcount--;
	                if(player.storage.gudonggeng_markcount==0){
	                    delete player.storage.gudonggeng;
	                    delete player.storage.gudonggeng_markcount;
	                    player.removeSkill('gudonggeng');
	                }
	                else{
	                    player.updateMarks();
	                }
	            },
	            group:'gudonggeng_damage',
	            subSkill:{
	                damage:{
	                    trigger:{player:'damageBegin'},
	                    filter:function(event,player){
	                        return event.card&&event.card.name=='sha'&&event.num>0;
	                    },
	                    forced:true,
	                    content:function(){
	                        trigger.num--;
							delete player.storage.gudonggeng;
		                    delete player.storage.gudonggeng_markcount;
		                    player.removeSkill('gudonggeng');
	                    }
	                }
	            },
	            ai:{
	                effect:{
	                    target:function(card,player,target){
	                        if(card.name=='sha'&&get.attitude(player,target)<0) return 0.5;
	                    }
	                }
	            }
	        },
	        qingtuan:{
	            mark:'card',
	            trigger:{player:'phaseAfter'},
	            forced:true,
	            popup:false,
	            nopop:true,
	            intro:{
	                content:function(storage,player){
	                    return '你在回合内使用首张杀时摸一张牌（剩余'+player.storage.qingtuan_markcount+'回合）'
	                }
	            },
	            content:function(){
	                player.storage.qingtuan_markcount--;
	                if(player.storage.qingtuan_markcount==0){
	                    delete player.storage.qingtuan;
	                    delete player.storage.qingtuan_markcount;
	                    player.removeSkill('qingtuan');
	                }
	                else{
	                    player.updateMarks();
	                }
	            },
	            group:'qingtuan_draw',
	            subSkill:{
	                draw:{
	                    trigger:{player:'useCard'},
	                    filter:function(event,player){
	                        return event.card.name=='sha'&&_status.currentPhase==player;
	                    },
	                    usable:1,
	                    forced:true,
	                    content:function(){
	                        player.draw();
	                    }
	                }
	            }
	        },
	        liyutang:{
	            mark:'card',
	            trigger:{player:'phaseEnd'},
	            forced:true,
	            popup:false,
	            nopop:true,
	            intro:{
	                content:function(storage,player){
	                    return '结束阶段，若你的体力值为全场最少或之一，你获得一点护甲（剩余'+player.storage.liyutang_markcount+'回合）'
	                }
	            },
	            content:function(){
	                if(player.isMinHp()){
	                    player.logSkill('liyutang');
	                    player.changeHujia();
	                }
	                player.storage.liyutang_markcount--;
	                if(player.storage.liyutang_markcount==0){
	                    delete player.storage.liyutang;
	                    delete player.storage.liyutang_markcount;
	                    player.removeSkill('liyutang');
	                }
	                else{
	                    player.updateMarks();
	                }
	            },
	        },
	        yougeng:{
	            mark:'card',
	            trigger:{player:'phaseBegin'},
	            forced:true,
	            popup:false,
	            nopop:true,
	            intro:{
	                content:function(storage,player){
	                    return '准备阶段，若你的体力值为全场最少或之一，你回复一点体力（剩余'+player.storage.yougeng_markcount+'回合）'
	                }
	            },
	            content:function(){
	                if(player.isDamaged()&&player.isMinHp()){
	                    player.logSkill('yougeng');
	                    player.recover();
	                }
	                player.storage.yougeng_markcount--;
	                if(player.storage.yougeng_markcount==0){
	                    delete player.storage.yougeng;
	                    delete player.storage.yougeng_markcount;
	                    player.removeSkill('yougeng');
	                }
	                else{
	                    player.updateMarks();
	                }
	            },
	        },
	        molicha:{
	            mark:'card',
	            trigger:{player:'phaseAfter'},
	            forced:true,
	            popup:false,
	            nopop:true,
	            intro:{
	                content:function(storage,player){
	                    return '你不能成为过河拆桥或延时锦囊牌的目标（剩余'+player.storage.molicha_markcount+'回合）'
	                }
	            },
	            mod:{
					targetEnabled:function(card){
						if(get.type(card)=='delay'||card.name=='guohe'){
							return false;
						}
					}
				},
	            content:function(){
	                player.storage.molicha_markcount--;
	                if(player.storage.molicha_markcount==0){
	                    delete player.storage.molicha;
	                    delete player.storage.molicha_markcount;
	                    player.removeSkill('molicha');
	                }
	                else{
	                    player.updateMarks();
	                }
	            }
	        },
	        yuanbaorou:{
	            mark:'card',
	            trigger:{player:'phaseAfter'},
	            forced:true,
	            popup:false,
	            nopop:true,
	            intro:{
	                content:function(storage,player){
	                    return '你在出牌阶段可以额外使用一张杀（剩余'+player.storage.yuanbaorou_markcount+'回合）'
	                }
	            },
	            mod:{
	                cardUsable:function(card,player,num){
						if(card.name=='sha') return num+1;
					}
				},
	            content:function(){
	                player.storage.yuanbaorou_markcount--;
	                if(player.storage.yuanbaorou_markcount==0){
	                    delete player.storage.yuanbaorou;
	                    delete player.storage.yuanbaorou_markcount;
	                    player.removeSkill('yuanbaorou');
	                }
	                else{
	                    player.updateMarks();
	                }
	            },
	        },
	        tanhuadong:{
	            mark:'card',
	            trigger:{player:'phaseEnd'},
	            forced:true,
	            popup:false,
	            nopop:true,
	            intro:{
	                content:function(storage,player){
	                    return '出牌阶段结束时，你摸一张牌（剩余'+player.storage.tanhuadong_markcount+'回合）'
	                }
	            },
	            content:function(){
	                player.storage.tanhuadong_markcount--;
	                if(player.storage.tanhuadong_markcount==0){
	                    delete player.storage.tanhuadong;
	                    delete player.storage.tanhuadong_markcount;
	                    player.removeSkill('tanhuadong');
	                }
	                else{
	                    player.updateMarks();
	                }
	            },
				group:'tanhuadong_draw',
				subSkill:{
					draw:{
						trigger:{player:'phaseUseEnd'},
						forced:true,
						content:function(){
							player.draw();
						}
					}
				}
	        },
	        mapodoufu:{
	            mark:'card',
	            trigger:{player:'phaseEnd'},
	            forced:true,
	            popup:false,
	            nopop:true,
	            intro:{
	                content:function(storage,player){
	                    return '结束阶段，你随机弃置一名随机敌人的一张随机牌（剩余'+player.storage.mapodoufu_markcount+'回合）'
	                }
	            },
	            content:function(){
                    var list=player.getEnemies();
                    for(var i=0;i<list.length;i++){
                        if(!list[i].countCards('he')){
                            list.splice(i--,1);
                        }
                    }
                    var target=list.randomGet();
                    if(target){
                        player.logSkill('mapodoufu',target);
                        target.discard(target.getCards('he').randomGet());
                        target.addExpose(0.2);
                    }

	                player.storage.mapodoufu_markcount--;
	                if(player.storage.mapodoufu_markcount==0){
	                    delete player.storage.mapodoufu;
	                    delete player.storage.mapodoufu_markcount;
	                    player.removeSkill('mapodoufu');
	                }
	                else{
	                    player.updateMarks();
	                }
	            }
	        },
	        yunvyuanshen_skill:{
				mark:'card',
				intro:{
					content:'下一进入濒死状态时回复一点体力'
				},
				trigger:{player:'dying'},
				forced:true,
	            priority:6.1,
	            onremove:true,
	            filter:function(event,player){
	                return player.hp<=0;
	            },
				content:function(){
	                player.recover();
	                player.removeSkill('yunvyuanshen_skill');
				}
			},
	        bingpotong:{},
	        heilonglinpian:{
	            mark:true,
	            marktext:'鳞',
	            intro:{
	                content:'防御距离+1'
	            },
	            mod:{
	                globalTo:function(from,to,distance){
	                    return distance+1
	                }
	            }
	        },
	        mutoumianju_skill:{
				enable:'chooseToUse',
				filterCard:true,
				viewAs:{name:'sha'},
				viewAsFilter:function(player){
					if(!player.countCards('h')) return false;
				},
				prompt:'将一张手牌当杀使用',
				check:function(card){return 5-get.value(card)},
				ai:{
					order:function(){
	                    return get.order({name:'sha'})+0.1;
	                },
	                skillTagFilter:function(player,tag,arg){
						if(arg!='use') return false;
						if(!player.countCards('h')) return false;
					},
				},
			},
	        yuheng_skill:{
	            enable:'phaseUse',
	            usable:1,
	            filterTarget:function(card,player,target){
	                return target!=player&&target.countCards('h')>0;
	            },
	            content:function(){
	                'step 0'
	                player.loseHp();
	                'step 1'
	                var hs=target.getCards('h');
	                if(hs.length){
	                    var card=hs.randomGet();
	                    player.gain(card,target);
	                    target.$give(card,player);
	                    if(get.suit(card)=='spade'){
	                        event.bool=true;
	                    }
	                }
	                'step 2'
	                if(event.bool){
	                    target.loseHp();
	                }
	                var card=player.getEquip('yuheng');
	                if(card){
	                    if(typeof card.storage.yuheng!='number'){
	                        card.storage.yuheng=1;
	                    }
	                    else{
	                        card.storage.yuheng++;
	                    }
	                    if(card.storage.yuheng>=3){
	                        card.init([card.suit,card.number,'yuheng_plus',card.nature]);
	                        player.addTempSkill('yuheng_plus_temp');
	                    }
	                }
	            },
	            ai:{
	                order:6,
	                result:{
	                    target:function(player,target){
	                        if(get.attitude(player,target)>=0) return 0;
	                        var nh=target.countCards('h');
	                        var num=-1/Math.sqrt(1+nh);
	                        if(player.hp>=4) return num;
	                        if(player.hp>=3&&nh<=2) return num;
	                        if(player.hp>=2&&target.hp==1&&nh<=2) return num;
	                        return 0;
	                    }
	                }
	            }
	        },
	        yuheng_plus_temp:{},
	        yuheng_plus_skill:{
	            enable:'phaseUse',
	            usable:1,
	            filter:function(event,player){
	                return !player.hasSkill('yuheng_plus_temp');
	            },
	            filterTarget:function(card,player,target){
	                return target!=player&&target.countCards('h')>0;
	            },
	            content:function(){
	                'step 0'
	                player.loseHp();
	                'step 1'
	                var hs=target.getCards('h');
	                if(hs.length){
	                    var card=hs.randomGet();
	                    player.gain(card,target);
	                    target.$give(card,player);
	                    if(get.color(card)=='black'){
	                        event.bool=true;
	                    }
	                }
	                'step 2'
	                if(event.bool){
	                    target.loseHp();
	                }
	                var card=player.getEquip('yuheng_plus');
	                if(card){
	                    if(typeof card.storage.yuheng!='number'){
	                        card.storage.yuheng=1;
	                    }
	                    else{
	                        card.storage.yuheng++;
	                    }
	                    if(card.storage.yuheng>=7){
	                        card.init([card.suit,card.number,'yuheng_pro',card.nature]);
	                    }
	                }
	            },
	            ai:{
	                order:6,
	                result:{
	                    target:function(player,target){
	                        if(get.attitude(player,target)>=0) return 0;
	                        var nh=target.countCards('h');
	                        var num=-1/Math.sqrt(1+nh);
	                        if(player.hp>=4) return num;
	                        if(player.hp>=3&&nh<=2) return num;
	                        if(player.hp>=2&&target.hp==1&&nh<=2) return num;
	                        return 0;
	                    }
	                }
	            }
	        },
	        yuheng_pro_skill:{
	            enable:'phaseUse',
	            filterTarget:function(card,player,target){
	                return target!=player&&target.countCards('h')>0;
	            },
	            content:function(){
	                'step 0'
	                player.loseHp();
	                'step 1'
	                var hs=target.getCards('h');
	                if(hs.length){
	                    var card=hs.randomGet();
	                    player.gain(card,target);
	                    target.$give(card,player);
	                    if(get.color(card)=='black'){
	                        event.bool=true;
	                    }
	                }
	                'step 2'
	                if(event.bool){
	                    target.loseHp();
	                }
	            },
	            ai:{
	                order:6,
	                result:{
	                    target:function(player,target){
	                        if(get.attitude(player,target)>=0) return 0;
	                        var nh=target.countCards('h');
	                        var num=-1/Math.sqrt(1+nh);
	                        if(player.hp>=4) return num;
	                        if(player.hp>=3&&nh<=2) return num;
	                        if(player.hp>=2&&target.hp==1&&nh<=2) return num;
	                        return 0;
	                    }
	                }
	            }
	        },
	        shihuifen:{
	            mark:true,
	            intro:{
	                content:'使用卡牌无法指定其他角色为目标'
	            },
	            mod:{
	                playerEnabled:function(card,player,target){
	                    if(player!=target) return false;
	                }
	            }
	        },
	        g_shihuifen:{
				trigger:{global:'phaseUseBegin'},
				direct:true,
				filter:function(event,player){
	                if(event.player.hasSkill('shihuifen')) return false;
					if(event.player==player) return false;
					if(!lib.filter.targetEnabled({name:'shihuifen'},player,event.player)) return false;
					return player.hasCard('shihuifen')||player.hasSkillTag('shihuifen');
				},
				content:function(){
					player.chooseToUse(get.prompt('shihuifen',trigger.player).replace(/发动/,'使用'),function(card,player){
						if(card.name!='shihuifen') return false;
	                    return lib.filter.cardEnabled(card,player,'forceEnable');
					},trigger.player,-1).targetRequired=true;
				}
			},
	        g_jinlianzhu:{
				trigger:{global:'damageBefore'},
				direct:true,
				filter:function(event,player){
					if(!lib.filter.targetEnabled({name:'jinlianzhu'},player,event.player)) return false;
					return player.hasCard('jinlianzhu');
				},
				content:function(){
					player.chooseToUse(get.prompt('jinlianzhu',trigger.player).replace(/发动/,'使用'),function(card,player){
						if(card.name!='jinlianzhu') return false;
	                    return lib.filter.cardEnabled(card,player,'forceEnable');
					},trigger.player,-1).targetRequired=true;
				}
			},
	    },
	    cardType:{
	        food:0.3
	    },
	    translate:{
	        jinlianzhu:'金莲珠',
	        jinlianzhu_info:'对一名即将受到伤害的角色使用，防止此伤害，并令伤害来源摸一张牌',
	        shihuifen:'石灰粉',
	        shihuifen_info:'在一名其他角色的出牌阶段开始时对其使用，目标需打出一张闪，否则此阶段使用卡牌无法指定其他角色为目标',
	        liufengsan:'流风散',
	        liufengsan_info:'出牌阶段对一名角色使用，目标获得两张闪',
	        liutouge:'六骰格',
	        liutouge_info:'出牌阶段对一名角色使用，若目标是敌人，对目标施加一个随机的负面效果；否则对目标施加一个随机的正面效果',
	        // longxugou:'龙须钩',
	        // longxugou_info:'龙须钩',
	        mianlijinzhen:'棉里针',
	        mianlijinzhen_info:'令一名角色摸一张牌并展示，若不是黑桃，你对其造成一点伤害',
	        // shenhuofeiya:'神火飞鸦',
	        // shenhuofeiya_info:'神火飞鸦',
	        // tuhunsha:'土魂砂',
	        // tuhunsha_info:'土魂砂',
	        // wenhuangsan:'瘟癀伞',
	        // wenhuangsan_info:'瘟癀伞',
	        qiankunbiao:'乾坤镖',
	        qiankunbiao_info:'随机弃置一名其他角色和其相邻角色的一张牌',

	        bingpotong:'天女散花',
	        bingpotong_info:'出牌阶段对至多3名角色使用，你与每个目标依次同时展示一张手牌，若颜色相同，你弃置展示的手牌，目标失去一点体力并终止结算',
	        feibiao:'飞镖',
	        feibiao_info:'出牌阶段，对一名距离1以外的角色使用，令其弃置一张黑色手牌或流失一点体力',

	        // liuxiaxianniang:'流霞仙酿',
	        // liuxiaxianniang_info:'流霞仙酿',
	        yunvyuanshen:'玉女元参',
	        yunvyuanshen_skill:'玉女元参',
	        yunvyuanshen_info:'出牌阶段对一名角色使用，目标在下一次进入濒死状态时回复一点体力',
	        // ziyangdan:'紫阳丹',
	        // ziyangdan_info:'紫阳丹',
	        yuheng:'玉衡',
	        yuheng_plus:'玉衡',
	        yuheng_pro:'玉衡',
	        yuheng_skill:'玉衡',
	        yuheng_plus_skill:'玉衡',
	        yuheng_pro_skill:'玉衡',
	        yuheng_info:'出牌阶段限一次，你可以失去一点体力，然后获得一名其他角色的一张手牌并展示，若为黑桃牌，该角色也失去一点体力（此牌在本局游戏中第三次和第七次发动效果后，分别自动获得一次强化）',
	        yuheng_plus_info:'由普通玉衡强化得到，将玉衡技能描述中的“黑桃牌”改为“黑色牌”',
	        yuheng_pro_info:'由普通玉衡二次强化得到，将玉横技能描述中的“黑桃牌”改为“黑色牌”，并去掉使用次数限制',
	        yuheng_skill_info:'出牌阶段限一次，你可以失去一点体力，然后获得一名其他角色的手牌并展示，若为黑桃牌，该角色也失去一点体力',
	        yuheng_plus_skill_info:'出牌阶段限一次，你可以失去一点体力，然后获得一名其他角色的手牌并展示，若为黑色牌，该角色也失去一点体力',
	        yuheng_pro_skill_info:'出牌阶段，你可以失去一点体力，然后获得一名其他角色的手牌并展示，若为黑色牌，该角色也失去一点体力',
	        shujinsan:'舒筋散',
	        shujinsan_info:'出牌阶段对任意角色使用，目标可弃置任意张牌，并摸等量的牌',
	        mutoumianju:'木头面具',
	        mutoumianju_info:'你可以将一张手牌当作杀使用',
	        mutoumianju_skill:'木杀',
	        mutoumianju_skill_info:'你可以将一张手牌当作杀使用',
	        heilonglinpian:'黑龙鳞片',
	        heilonglinpian_info:'出牌阶段对自己使用，获得一点护甲，直到下一回合开始，你的防御距离+1',

	        food:'食物',
	        chunbing:'春饼',
	        chunbing_info:'你的手牌上限+1，持续五回合',
	        gudonggeng:'骨董羹',
	        gudonggeng_info:'当你下一次受到杀造成的伤害时，令伤害-1，持续三回合',
	        yougeng:'酉羹',
	        yougeng_info:'准备阶段，若你的体力值为全场最少或之一，你回复一点体力，持续两回合',
	        liyutang:'鲤鱼汤',
	        liyutang_info:'结束阶段，若你的体力值为全场最少或之一，你获得一点护甲，持续两回合',
	        mizhilianou:'蜜汁藕',
	        mizhilianou_info:'你可以将一张红桃牌当作桃使用，持续四回合',
	        xiajiao:'虾饺',
	        xiajiao_info:'你在摸牌阶段额外摸一张牌，并在摸牌阶段时弃置一张牌，持续三回合',
	        tanhuadong:'昙花冻',
	        tanhuadong_info:'出牌阶段结束时，你摸一张牌，持续三回合',
	        qingtuan:'青团',
	        qingtuan_info:'你在回合内使用首张杀时摸一张牌，持续两回合',
	        luyugeng:'鲈鱼羹',
	        luyugeng_info:'准备阶段，你对一名体力值全场最高的随机敌人造成一点雷属性伤害，持续两回合',
	        yuanbaorou:'元宝肉',
	        yuanbaorou_info:'你在出牌阶段可以额外使用一张杀，持续三回合',
	        molicha:'茉莉茶',
	        molicha_info:'弃置判定区内的所有牌；你不能成为过河拆桥或延时锦囊牌的目标，持续五回合',
	        mapodoufu:'麻婆豆腐',
	        mapodoufu_info:'结束阶段，你弃置一名随机敌人的一张随机牌，持续两回合',
	    },
	    list:[
	        ['spade',2,'tanhuadong'],
	        ['club',1,'molicha'],
	        ['club',3,'chunbing'],
	        ['heart',12,'yougeng'],
	        ['heart',8,'gudonggeng'],
	        ['heart',1,'liyutang'],
	        ['diamond',4,'mizhilianou'],
	        ['diamond',6,'xiajiao'],
	        ['spade',3,'qingtuan'],
	        ['club',11,'luyugeng'],
	        ['heart',4,'mapodoufu'],
	        ['spade',8,'yuanbaorou'],

	        ['spade',7,'yuheng'],
	        ['club',4,'mutoumianju'],
	        ['spade',2,'heilonglinpian'],
	        ['spade',1,'mianlijinzhen'],
	        ['heart',13,'yunvyuanshen'],

	        ['club',8,'feibiao','poison'],
	        ['diamond',9,'feibiao','poison'],

	        ['spade',3,'bingpotong','poison'],
			['club',12,'bingpotong','poison'],

	        ['club',5,'shihuifen'],
	        ['club',1,'shihuifen'],
	        ['spade',13,'shihuifen'],

	        ['diamond',6,'shujinsan'],
	        ['spade',2,'shujinsan'],

	        ['spade',9,'qiankunbiao'],
	        ['club',13,'qiankunbiao'],

	        ['heart',9,'jinlianzhu'],
	        ['spade',7,'jinlianzhu'],

	        ['heart',6,'liutouge'],
	        ['club',6,'liutouge'],

	        ['club',6,'liufengsan'],
	        ['club',3,'liufengsan'],

	    ]
	};
});
