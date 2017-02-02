'use strict';
card.gujian={
    card:{
        chunbing:{
            fullskin:true,
            type:'food',
            enable:true,
            filterTarget:function(card,player,target){
                return target==player;
            },
            selectTarget:-1,
            modTarget:true,
        },
        gudonggeng:{
            fullskin:true,
            type:'food',
            enable:true,
            filterTarget:function(card,player,target){
                return target==player;
            },
            selectTarget:-1,
            modTarget:true,
        },
        yougeng:{
            fullskin:true,
            type:'food',
            enable:true,
            filterTarget:function(card,player,target){
                return target==player;
            },
            selectTarget:-1,
            modTarget:true,
        },
        liyutang:{
            fullskin:true,
            type:'food',
            enable:true,
            filterTarget:function(card,player,target){
                return target==player;
            },
            selectTarget:-1,
            modTarget:true,
        },
        mizhilianou:{
            fullskin:true,
            type:'food',
            enable:true,
            filterTarget:function(card,player,target){
                return target==player;
            },
            selectTarget:-1,
            modTarget:true,
        },
        xiajiao:{
            fullskin:true,
            type:'food',
            enable:true,
            filterTarget:function(card,player,target){
                return target==player;
            },
            selectTarget:-1,
            modTarget:true,
        },
        tanhuadong:{
            fullskin:true,
            type:'food',
            enable:true,
            filterTarget:function(card,player,target){
                return target==player;
            },
            selectTarget:-1,
            modTarget:true,
        },
        qingtuan:{
            fullskin:true,
            type:'food',
            enable:true,
            filterTarget:function(card,player,target){
                return target==player;
            },
            selectTarget:-1,
            modTarget:true,
        },
        yuanbaorou:{
            fullskin:true,
            type:'food',
            enable:true,
            filterTarget:function(card,player,target){
                return target==player;
            },
            selectTarget:-1,
            modTarget:true,
        },
        molicha:{
            fullskin:true,
            type:'food',
            enable:true,
            filterTarget:function(card,player,target){
                return target==player;
            },
            selectTarget:-1,
            modTarget:true,
        },
        mapodoufu:{
            fullskin:true,
            type:'food',
            enable:true,
            filterTarget:function(card,player,target){
                return target==player;
            },
            selectTarget:-1,
            modTarget:true,
        },
        heilonglinpian:{
            fullskin:true,
            type:'trick',
        },
        mutoumianju:{
            fullskin:true,
            type:'equip',
            subtype:'equip2',
        },
        yuheng:{
            fullskin:true,
            type:'equip',
            subtype:'equip5',
        },
        shujinsan:{
            fullskin:true,
            type:'basic',
        },
    },
    skill:{},
    cardType:{
        food:0.3
    },
    translate:{
        yuheng:'玉衡',
        yuheng_info:'回合结束阶段，若场你的体力值不是全场最少，你失去一点体力并令玉衡获得一点力量；回合开始阶段，玉衡每有一点力量，你便可以获得一名其他角色的一张牌',
        shujinsan:'舒筋散',
        shujinsan_info:'对任意角色使用，目标可弃置任意张牌，并摸等量的牌',
        mutoumianju:'木头面具',
        mutoumianju_info:'装备后视为拥有技能龙胆',
        heilonglinpian:'黑龙鳞片',
        heilonglinpian_info:'对自己使用，获得一点护甲，直到下一回合开始，计算其他角色与你的距离时始终+1',

        food:'食物',
        chunbing:'春饼',
        gudonggeng:'骨董羹',
        yougeng:'酉羹',
        liyutang:'鲤鱼汤',
        mizhilianou:'蜜汁藕',
        xiajiao:'虾饺',
        tanhuadong:'昙花冻',
        qingtuan:'青团',
        luyugeng:'鲈鱼羹',
        yuanbaorou:'元宝肉',
        molicha:'茉莉茶',
        mapodoufu:'麻婆豆腐',
    }
};